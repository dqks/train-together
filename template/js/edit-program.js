/* ============================================
   Edit Program Page JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // Photo Upload
  const photoUpload = document.getElementById('photoUpload');
  const programPhoto = document.getElementById('programPhoto');
  const photoPreview = document.getElementById('photoPreview');
  const photoActions = document.getElementById('photoActions');
  const previewImage = document.getElementById('previewImage');
  const removePhoto = document.getElementById('removePhoto');

  if (programPhoto && photoUpload) {
    programPhoto.addEventListener('change', (e) => {
      const file = e.target.files[0];
      if (file && file.type.startsWith('image/')) {
        const reader = new FileReader();
        reader.onload = (event) => {
          previewImage.src = event.target.result;
          photoPreview.style.display = 'none';
          photoActions.style.display = 'block';
          photoUpload.classList.add('has-preview');
        };
        reader.readAsDataURL(file);
      }
    });

    if (removePhoto) {
      removePhoto.addEventListener('click', (e) => {
        e.preventDefault();
        e.stopPropagation();
        programPhoto.value = '';
        previewImage.src = '';
        photoPreview.style.display = '';
        photoActions.style.display = 'none';
        photoUpload.classList.remove('has-preview');
      });
    }

    // Drag and drop
    photoUpload.addEventListener('dragover', (e) => {
      e.preventDefault();
      photoUpload.style.borderColor = 'var(--color-accent)';
      photoUpload.style.backgroundColor = 'var(--color-bg-secondary)';
    });

    photoUpload.addEventListener('dragleave', (e) => {
      e.preventDefault();
      photoUpload.style.borderColor = '';
      photoUpload.style.backgroundColor = '';
    });

    photoUpload.addEventListener('drop', (e) => {
      e.preventDefault();
      photoUpload.style.borderColor = '';
      photoUpload.style.backgroundColor = '';
      const files = e.dataTransfer.files;
      if (files.length > 0 && files[0].type.startsWith('image/')) {
        programPhoto.files = files;
        programPhoto.dispatchEvent(new Event('change'));
      }
    });
  }

  // Toggle Day Expand/Collapse
  document.querySelectorAll('.day-toggle').forEach(btn => {
    btn.addEventListener('click', () => {
      const dayCard = btn.closest('.training-day-card');
      dayCard.classList.toggle('collapsed');
      
      // Rotate icon
      const icon = btn.querySelector('svg');
      if (dayCard.classList.contains('collapsed')) {
        icon.style.transform = 'rotate(-90deg)';
      } else {
        icon.style.transform = 'rotate(0deg)';
      }
    });
  });

  // Delete Day
  document.querySelectorAll('.day-delete').forEach(btn => {
    btn.addEventListener('click', () => {
      if (confirm('Удалить этот день и все упражнения в нём?')) {
        const dayCard = btn.closest('.training-day-card');
        dayCard.remove();
        updateDayNumbers();
        updateStats();
      }
    });
  });

  // Add Exercise
  document.querySelectorAll('.add-exercise-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const dayCard = btn.closest('.training-day-card');
      const exercisesList = dayCard.querySelector('.day-exercises');
      const exerciseCount = exercisesList.querySelectorAll('.exercise-row').length;
      
      const newExercise = createExerciseRow(exerciseCount + 1);
      exercisesList.appendChild(newExercise);
      
      // Add event listeners
      attachExerciseListeners(newExercise);
      updateExerciseNumbers(dayCard);
      updateStats();
    });
  });

  // Attach listeners to existing exercises
  document.querySelectorAll('.exercise-row.editable').forEach(row => {
    attachExerciseListeners(row);
  });

  // Add Day
  const addDayBtn = document.getElementById('addDayBtn');
  if (addDayBtn) {
    addDayBtn.addEventListener('click', () => {
      const daysList = document.getElementById('trainingDaysList');
      const dayCount = daysList.querySelectorAll('.training-day-card').length;
      
      const newDay = createTrainingDay(dayCount + 1);
      daysList.appendChild(newDay);
      
      // Add event listeners
      attachDayListeners(newDay);
      newDay.querySelectorAll('.exercise-row.editable').forEach(row => {
        attachExerciseListeners(row);
      });
      updateStats();
      
      // Scroll to new day
      newDay.scrollIntoView({ behavior: 'smooth', block: 'center' });
    });
  }

  // Save Button
  const saveBtn = document.getElementById('saveBtn');
  if (saveBtn) {
    saveBtn.addEventListener('click', () => {
      saveProgram();
    });
  }

  // Preview Button
  const previewBtn = document.getElementById('previewBtn');
  if (previewBtn) {
    previewBtn.addEventListener('click', () => {
      // In a real app, this would open a preview modal or navigate to detail view
      alert('Предпросмотр доступен после сохранения программы');
    });
  }

  // Public toggle change
  const isPublicToggle = document.getElementById('isPublic');
  if (isPublicToggle) {
    isPublicToggle.addEventListener('change', updateStats);
  }
});

// Helper: Create Exercise Row
function createExerciseRow(number) {
  const div = document.createElement('div');
  div.className = 'exercise-row editable';
  div.innerHTML = `
    <div class="exercise-drag-handle">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="8" y1="6" x2="21" y2="6"/>
        <line x1="8" y1="12" x2="21" y2="12"/>
        <line x1="8" y1="18" x2="21" y2="18"/>
        <line x1="3" y1="6" x2="3.01" y2="6"/>
        <line x1="3" y1="12" x2="3.01" y2="12"/>
        <line x1="3" y1="18" x2="3.01" y2="18"/>
      </svg>
    </div>
    <div class="exercise-number">${number}</div>
    <div class="exercise-details">
      <input type="text" class="form-input exercise-name-input" placeholder="Название упражнения">
      <div class="exercise-params">
        <input type="number" class="form-input param-input" placeholder="Подходы">
        <input type="text" class="form-input param-input" placeholder="Повторения">
        <input type="number" class="form-input param-input" placeholder="Отдых (сек)">
      </div>
    </div>
    <div class="exercise-muscle-tag">—</div>
    <div class="exercise-actions">
      <button class="btn btn-xs btn-ghost exercise-edit" title="Выбрать из каталога">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
          <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
        </svg>
      </button>
      <button class="btn btn-xs btn-ghost exercise-delete" title="Удалить">
        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/>
          <line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    </div>
  `;
  return div;
}

// Helper: Create Training Day
function createTrainingDay(number) {
  const days = ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'];
  const dayName = days[Math.min(number - 1, 6)] || `День ${number}`;
  
  const div = document.createElement('div');
  div.className = 'training-day-card editable';
  div.setAttribute('data-day', number);
  div.innerHTML = `
    <div class="day-header">
      <div class="day-header-left">
        <div class="day-drag-handle">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <line x1="8" y1="6" x2="21" y2="6"/>
            <line x1="8" y1="12" x2="21" y2="12"/>
            <line x1="8" y1="18" x2="21" y2="18"/>
            <line x1="3" y1="6" x2="3.01" y2="6"/>
            <line x1="3" y1="12" x2="3.01" y2="12"/>
            <line x1="3" y1="18" x2="3.01" y2="18"/>
          </svg>
        </div>
        <div class="day-badge">
          <span class="day-number">${number}</span>
          <input type="text" class="day-name-input" value="${dayName}" placeholder="Название дня">
        </div>
      </div>
      <div class="day-header-actions">
        <button class="btn btn-sm btn-ghost day-toggle">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="6 9 12 15 18 9"/>
          </svg>
        </button>
        <button class="btn btn-sm btn-ghost day-delete">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
            <polyline points="3 6 5 6 21 6"/>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"/>
          </svg>
        </button>
      </div>
    </div>
    <div class="day-focus-input">
      <input type="text" class="form-input" placeholder="Фокус дня (например: Грудь • Трицепс)">
    </div>
    <div class="day-exercises">
    </div>
    <button class="btn btn-sm btn-outline add-exercise-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <line x1="12" y1="5" x2="12" y2="19"/>
        <line x1="5" y1="12" x2="19" y2="12"/>
      </svg>
      Добавить упражнение
    </button>
  `;
  return div;
}

// Helper: Attach listeners to exercise row
function attachExerciseListeners(row) {
  const deleteBtn = row.querySelector('.exercise-delete');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      const dayCard = row.closest('.training-day-card');
      row.remove();
      updateExerciseNumbers(dayCard);
      updateStats();
    });
  }

  const editBtn = row.querySelector('.exercise-edit');
  if (editBtn) {
    editBtn.addEventListener('click', () => {
      // In a real app, this would open a modal to select exercise from catalog
      const nameInput = row.querySelector('.exercise-name-input');
      const muscleTag = row.querySelector('.exercise-muscle-tag');
      const newName = prompt('Введите название упражнения:', nameInput.value);
      if (newName) {
        nameInput.value = newName;
        const newMuscle = prompt('Введите целевую мышцу:', muscleTag.textContent);
        if (newMuscle) {
          muscleTag.textContent = newMuscle;
        }
      }
    });
  }
}

// Helper: Attach listeners to day
function attachDayListeners(dayCard) {
  const toggleBtn = dayCard.querySelector('.day-toggle');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', () => {
      dayCard.classList.toggle('collapsed');
      const icon = toggleBtn.querySelector('svg');
      if (dayCard.classList.contains('collapsed')) {
        icon.style.transform = 'rotate(-90deg)';
      } else {
        icon.style.transform = 'rotate(0deg)';
      }
    });
  }

  const deleteBtn = dayCard.querySelector('.day-delete');
  if (deleteBtn) {
    deleteBtn.addEventListener('click', () => {
      if (confirm('Удалить этот день и все упражнения в нём?')) {
        dayCard.remove();
        updateDayNumbers();
        updateStats();
      }
    });
  }

  const addExerciseBtn = dayCard.querySelector('.add-exercise-btn');
  if (addExerciseBtn) {
    addExerciseBtn.addEventListener('click', () => {
      const exercisesList = dayCard.querySelector('.day-exercises');
      const exerciseCount = exercisesList.querySelectorAll('.exercise-row').length;
      
      const newExercise = createExerciseRow(exerciseCount + 1);
      exercisesList.appendChild(newExercise);
      attachExerciseListeners(newExercise);
      updateExerciseNumbers(dayCard);
      updateStats();
    });
  }
}

// Helper: Update day numbers
function updateDayNumbers() {
  document.querySelectorAll('.training-day-card').forEach((card, index) => {
    const number = index + 1;
    card.setAttribute('data-day', number);
    card.querySelector('.day-number').textContent = number;
  });
}

// Helper: Update exercise numbers within a day
function updateExerciseNumbers(dayCard) {
  dayCard.querySelectorAll('.exercise-row').forEach((row, index) => {
    row.querySelector('.exercise-number').textContent = index + 1;
  });
}

// Helper: Update stats
function updateStats() {
  const daysCount = document.querySelectorAll('.training-day-card').length;
  const exercisesCount = document.querySelectorAll('.exercise-row.editable').length;
  
  const daysCountEl = document.getElementById('daysCount');
  const exercisesCountEl = document.getElementById('exercisesCount');
  
  if (daysCountEl) daysCountEl.textContent = daysCount;
  if (exercisesCountEl) exercisesCountEl.textContent = exercisesCount;
}

// Helper: Save program (placeholder)
function saveProgram() {
  const programData = {
    name: document.getElementById('programName')?.value,
    description: document.getElementById('programDescription')?.value,
    weeks: document.getElementById('programWeeks')?.value,
    level: document.getElementById('programLevel')?.value,
    frequency: document.getElementById('programFrequency')?.value,
    isPublic: document.getElementById('isPublic')?.checked,
    days: []
  };

  // Collect days data
  document.querySelectorAll('.training-day-card').forEach((dayCard, dayIndex) => {
    const dayData = {
      name: dayCard.querySelector('.day-name-input')?.value,
      focus: dayCard.querySelector('.day-focus-input input')?.value,
      exercises: []
    };

    dayCard.querySelectorAll('.exercise-row').forEach(exRow => {
      dayData.exercises.push({
        name: exRow.querySelector('.exercise-name-input')?.value,
        sets: exRow.querySelector('.param-input:nth-child(1)')?.value,
        reps: exRow.querySelector('.param-input:nth-child(2)')?.value,
        rest: exRow.querySelector('.param-input:nth-child(3)')?.value,
        muscle: exRow.querySelector('.exercise-muscle-tag')?.textContent
      });
    });

    programData.days.push(dayData);
  });

  console.log('Saving program:', programData);
  
  // Show success message
  const saveBtn = document.getElementById('saveBtn');
  if (saveBtn) {
    const originalText = saveBtn.innerHTML;
    saveBtn.innerHTML = `
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
        <polyline points="20 6 9 17 4 12"/>
      </svg>
      Сохранено!
    `;
    saveBtn.classList.add('btn-success');
    
    setTimeout(() => {
      saveBtn.innerHTML = originalText;
      saveBtn.classList.remove('btn-success');
    }, 2000);
  }
}
