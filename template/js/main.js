/* ============================================
   FitApp — Main JavaScript
   ============================================ */

document.addEventListener('DOMContentLoaded', () => {
  // ============================================
  // Mobile Menu Toggle
  // ============================================
  const menuToggle = document.getElementById('menuToggle');
  const sidebar = document.getElementById('sidebar');
  const sidebarOverlay = document.getElementById('sidebarOverlay');

  if (menuToggle && sidebar && sidebarOverlay) {
    menuToggle.addEventListener('click', () => {
      sidebar.classList.toggle('open');
      sidebarOverlay.classList.toggle('active');
      document.body.style.overflow = sidebar.classList.contains('open') ? 'hidden' : '';
    });

    sidebarOverlay.addEventListener('click', () => {
      sidebar.classList.remove('open');
      sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    });
  }

  // ============================================
  // Tabs
  // ============================================
  const tabs = document.querySelectorAll('.tab');
  const tabContents = document.querySelectorAll('.tab-content');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      const targetTab = tab.dataset.tab;
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');
      tabContents.forEach(content => content.classList.remove('active'));
      const targetContent = document.getElementById(targetTab);
      if (targetContent) {
        targetContent.classList.add('active');
      }
    });
  });

  // ============================================
  // Filter Sidebars (Exercises Page)
  // ============================================
  const filterMusclesBtn = document.getElementById('filterMusclesBtn');
  const filterEquipmentBtn = document.getElementById('filterEquipmentBtn');
  const musclesSidebar = document.getElementById('musclesSidebar');
  const equipmentSidebar = document.getElementById('equipmentSidebar');
  const closeMusclesSidebar = document.getElementById('closeMusclesSidebar');
  const closeEquipmentSidebar = document.getElementById('closeEquipmentSidebar');

  function openSidebar(sb) {
    if (sb) {
      sb.classList.add('open');
      if (sidebarOverlay) sidebarOverlay.classList.add('active');
    }
  }

  function closeSidebar(sb) {
    if (sb) sb.classList.remove('open');
    if (sidebarOverlay && musclesSidebar && !musclesSidebar.classList.contains('open') &&
        equipmentSidebar && !equipmentSidebar.classList.contains('open')) {
      sidebarOverlay.classList.remove('active');
    }
  }

  if (filterMusclesBtn && musclesSidebar) {
    filterMusclesBtn.addEventListener('click', () => openSidebar(musclesSidebar));
  }
  if (filterEquipmentBtn && equipmentSidebar) {
    filterEquipmentBtn.addEventListener('click', () => openSidebar(equipmentSidebar));
  }
  if (closeMusclesSidebar) {
    closeMusclesSidebar.addEventListener('click', () => closeSidebar(musclesSidebar));
  }
  if (closeEquipmentSidebar) {
    closeEquipmentSidebar.addEventListener('click', () => closeSidebar(equipmentSidebar));
  }

  // ============================================
  // Modal (Create Program)
  // ============================================
  const createProgramBtn = document.getElementById('createProgramBtn');
  const createProgramModal = document.getElementById('createProgramModal');
  const closeModalBtn = document.getElementById('closeModal');
  const cancelCreate = document.getElementById('cancelCreate');

  function openModal() {
    if (createProgramModal) {
      createProgramModal.classList.add('active');
      document.body.style.overflow = 'hidden';
    }
  }

  function closeModal() {
    if (createProgramModal) {
      createProgramModal.classList.remove('active');
      document.body.style.overflow = '';
    }
  }

  if (createProgramBtn) {
    createProgramBtn.addEventListener('click', openModal);
  }
  if (closeModalBtn) {
    closeModalBtn.addEventListener('click', closeModal);
  }
  if (cancelCreate) {
    cancelCreate.addEventListener('click', closeModal);
  }
  if (createProgramModal) {
    createProgramModal.addEventListener('click', (e) => {
      if (e.target === createProgramModal) closeModal();
    });
  }

  // ============================================
  // Create Exercise Item Helper
  // ============================================
  function createExerciseItem() {
    const div = document.createElement('div');
    div.className = 'exercise-item';
    div.innerHTML = `
      <div class="exercise-item-content">
        <input type="text" class="form-input exercise-name" placeholder="Название упражнения">
        <div class="exercise-params">
          <input type="number" class="form-input param-input" placeholder="Подходы">
          <input type="number" class="form-input param-input" placeholder="Повторения">
          <input type="number" class="form-input param-input" placeholder="Отдых (сек)">
        </div>
      </div>
      <button type="button" class="btn btn-sm btn-ghost remove-exercise">
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
        </svg>
      </button>
    `;
    div.querySelector('.remove-exercise').addEventListener('click', () => div.remove());
    return div;
  }

  // Add exercise to existing day
  document.querySelectorAll('.add-exercise-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      const exerciseList = btn.previousElementSibling;
      if (exerciseList) {
        exerciseList.appendChild(createExerciseItem());
      }
    });
  });

  // Remove exercise
  document.querySelectorAll('.remove-exercise').forEach(btn => {
    btn.addEventListener('click', () => {
      btn.closest('.exercise-item').remove();
    });
  });

  // Add new training day
  const addExerciseBtn = document.getElementById('addExerciseBtn');
  if (addExerciseBtn) {
    addExerciseBtn.addEventListener('click', () => {
      const trainingDays = document.querySelectorAll('.training-day');
      if (trainingDays.length > 0) {
        const lastDay = trainingDays[trainingDays.length - 1];
        const newDay = lastDay.cloneNode(true);
        const dayNumber = trainingDays.length + 1;
        newDay.querySelector('.training-day-name').value = 'День ' + dayNumber;
        // Clear exercises in cloned day
        const exerciseList = newDay.querySelector('.exercise-list');
        if (exerciseList) exerciseList.innerHTML = '';
        // Re-attach listeners
        newDay.querySelectorAll('.remove-exercise').forEach(btn => {
          btn.addEventListener('click', () => btn.closest('.exercise-item').remove());
        });
        newDay.querySelector('.add-exercise-btn').addEventListener('click', () => {
          const el = newDay.querySelector('.exercise-list');
          if (el) el.appendChild(createExerciseItem());
        });
        lastDay.parentNode.insertBefore(newDay, lastDay.nextSibling);
      }
    });
  }

  // ============================================
  // Escape key closes modals/sidebars
  // ============================================
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
      closeModal();
      if (musclesSidebar) musclesSidebar.classList.remove('open');
      if (equipmentSidebar) equipmentSidebar.classList.remove('open');
      if (sidebarOverlay) sidebarOverlay.classList.remove('active');
      document.body.style.overflow = '';
    }
  });

  // ============================================
  // Filter Chips (single select)
  // ============================================
  document.querySelectorAll('.filter-chip').forEach(chip => {
    chip.addEventListener('click', () => {
      const parent = chip.parentElement;
      if (parent && parent.classList.contains('filter-chips')) {
        // Single select within a group
        parent.querySelectorAll('.filter-chip').forEach(c => c.classList.remove('active'));
      }
      chip.classList.toggle('active');
      
      // Trigger filter update if on exercises or user-programs page
      if (document.getElementById('exercisesGrid')) {
        filterExercises();
      }
      if (document.getElementById('programsGrid')) {
        filterPrograms();
      }
    });
  });

  // ============================================
  // Search Input Handler
  // ============================================
  const searchInput = document.getElementById('searchInput');
  if (searchInput) {
    searchInput.addEventListener('input', () => {
      if (document.getElementById('exercisesGrid')) {
        filterExercises();
      }
      if (document.getElementById('programsGrid')) {
        filterPrograms();
      }
    });
  }

  // ============================================
  // Exercise Filtering
  // ============================================
  function filterExercises() {
    const grid = document.getElementById('exercisesGrid');
    const cards = grid ? grid.querySelectorAll('.exercise-card') : [];
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    // Get selected muscles
    const selectedMuscles = Array.from(document.querySelectorAll('#musclesSidebar input[name="muscle"]:checked'))
      .map(cb => cb.value);
    
    // Get selected equipment
    const selectedEquipment = Array.from(document.querySelectorAll('#equipmentSidebar input[name="equipment"]:checked'))
      .map(cb => cb.value);
    
    let visibleCount = 0;
    
    cards.forEach(card => {
      const name = card.dataset.name || '';
      const muscles = card.dataset.muscles || '';
      const equipment = card.dataset.equipment || '';
      
      // Search filter
      const matchesSearch = !searchQuery || name.includes(searchQuery);
      
      // Muscle filter (OR logic within muscles, card must match at least one)
      const matchesMuscles = selectedMuscles.length === 0 || 
        selectedMuscles.some(m => muscles.includes(m));
      
      // Equipment filter (OR logic, card must match at least one)
      const matchesEquipment = selectedEquipment.length === 0 || 
        selectedEquipment.some(e => equipment.includes(e));
      
      if (matchesSearch && matchesMuscles && matchesEquipment) {
        card.style.display = '';
        visibleCount++;
      } else {
        card.style.display = 'none';
      }
    });
    
    updateFiltersInfo(visibleCount, selectedMuscles, selectedEquipment);
  }
  
  function updateFiltersInfo(count, muscles, equipment) {
    const resultsCount = document.getElementById('resultsCount');
    const activeFilters = document.getElementById('activeFilters');
    const clearBtn = document.getElementById('clearFilters');
    
    if (resultsCount) {
      resultsCount.innerHTML = `Показано: <strong>${count}</strong> упражнений`;
    }
    
    // Build active filter chips
    const allFilters = [
      ...muscles.map(m => ({ type: 'muscle', value: m })),
      ...equipment.map(e => ({ type: 'equipment', value: e }))
    ];
    
    if (activeFilters) {
      activeFilters.innerHTML = allFilters.map(f => 
        `<span class=\"filter-chip-tag\">${getFilterLabel(f.type, f.value)} <button onclick=\"removeFilter('${f.type}', '${f.value}')\">×</button></span>`
      ).join('');
    }
    
    if (clearBtn) {
      clearBtn.style.display = allFilters.length > 0 ? '' : 'none';
    }
  }
  
  function getFilterLabel(type, value) {
    const labels = {
      muscle: { chest: 'Грудные', back: 'Спина', shoulders: 'Плечи', biceps: 'Бицепс', triceps: 'Трицепс', legs: 'Ноги', core: 'Пресс', glutes: 'Ягодицы' },
      equipment: { barbell: 'Штанга', dumbbells: 'Гантели', kettlebell: 'Гиря', 'pullup-bar': 'Турник', bodyweight: 'Собственный вес', cable: 'Тросовый', machine: 'Тренажёр' }
    };
    return labels[type]?.[value] || value;
  }
  
  window.removeFilter = function(type, value) {
    const checkbox = document.querySelector(`#${type === 'muscle' ? 'musclesSidebar' : 'equipmentSidebar'} input[value="${value}"]`);
    if (checkbox) checkbox.checked = false;
    filterExercises();
  };

  // Apply buttons for sidebars
  const applyMusclesBtn = document.getElementById('applyMusclesFilter');
  const applyEquipmentBtn = document.getElementById('applyEquipmentFilter');
  
  if (applyMusclesBtn) {
    applyMusclesBtn.addEventListener('click', () => {
      closeSidebar(musclesSidebar);
      filterExercises();
    });
  }
  
  if (applyEquipmentBtn) {
    applyEquipmentBtn.addEventListener('click', () => {
      closeSidebar(equipmentSidebar);
      filterExercises();
    });
  }

  // ============================================
  // Program Filtering (User Programs Page)
  // ============================================
  function filterPrograms() {
    const grid = document.getElementById('programsGrid');
    const cards = grid ? grid.querySelectorAll('.program-card') : [];
    const searchQuery = searchInput ? searchInput.value.toLowerCase().trim() : '';
    
    // Get sort type
    const sortChip = document.querySelector('#sortChips .filter-chip.active');
    const sortType = sortChip ? sortChip.dataset.sort : 'popular';
    
    // Get level filter
    const levelChip = document.querySelector('#levelChips .filter-chip.active');
    const levelFilter = levelChip ? levelChip.dataset.level : '';
    
    let visibleCards = Array.from(cards).filter(card => {
      const name = (card.dataset.name || '').toLowerCase();
      const author = (card.dataset.author || '').toLowerCase();
      const level = card.dataset.level || '';
      
      // Search filter
      const matchesSearch = !searchQuery || 
        name.includes(searchQuery) || 
        author.includes(searchQuery);
      
      // Level filter
      const matchesLevel = !levelFilter || level.includes(levelFilter);
      
      return matchesSearch && matchesLevel;
    });
    
    // Sort
    visibleCards.sort((a, b) => {
      if (sortType === 'rated') {
        return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
      } else if (sortType === 'new') {
        // For demo, just reverse order (would normally use date)
        return 1;
      }
      // popular - by rating for demo
      return parseFloat(b.dataset.rating) - parseFloat(a.dataset.rating);
    });
    
    // Hide all, then show sorted
    cards.forEach(card => card.style.display = 'none');
    visibleCards.forEach((card, i) => {
      card.style.display = '';
      card.style.animation = 'none';
      card.offsetHeight; // Trigger reflow
      card.style.animation = `fadeIn 0.3s ease ${i * 0.05}s forwards`;
    });
    
    // Update count
    const resultsCount = document.getElementById('resultsCount');
    if (resultsCount) {
      resultsCount.innerHTML = `Показано: <strong>${visibleCards.length}</strong> программ`;
    }
    
    // Update active level filter display
    const activeFilters = document.getElementById('activeFilters');
    if (activeFilters) {
      if (levelFilter) {
        const levelLabels = { beginner: 'Начинающим', intermediate: 'Средний', advanced: 'Продвинутым' };
        activeFilters.innerHTML = `<span class=\"filter-chip-tag\">${levelLabels[levelFilter] || levelFilter} <button onclick=\"clearLevelFilter()\">×</button></span>`;
      } else {
        activeFilters.innerHTML = '';
      }
    }
    
    const clearBtn = document.getElementById('clearFilters');
    if (clearBtn) {
      clearBtn.style.display = levelFilter ? '' : 'none';
    }
  }
  
  window.clearLevelFilter = function() {
    document.querySelectorAll('#levelChips .filter-chip').forEach(c => c.classList.remove('active'));
    filterPrograms();
  };
  
  window.clearAllFilters = function() {
    document.querySelectorAll('#sortChips .filter-chip').forEach(c => c.classList.remove('active'));
    document.querySelector('#sortChips .filter-chip[data-sort="popular"]').classList.add('active');
    document.querySelectorAll('#levelChips .filter-chip').forEach(c => c.classList.remove('active'));
    if (searchInput) searchInput.value = '';
    document.querySelectorAll('#musclesSidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    document.querySelectorAll('#equipmentSidebar input[type="checkbox"]').forEach(cb => cb.checked = false);
    filterExercises();
    filterPrograms();
  };

  // Clear filters button
  const clearFiltersBtn = document.getElementById('clearFilters');
  if (clearFiltersBtn) {
    clearFiltersBtn.addEventListener('click', () => {
      if (document.getElementById('exercisesGrid')) {
        window.clearAllFilters();
      } else if (document.getElementById('programsGrid')) {
        document.querySelectorAll('#levelChips .filter-chip').forEach(c => c.classList.remove('active'));
        if (searchInput) searchInput.value = '';
        filterPrograms();
      }
    });
  }

  // ============================================
  // Requirement Cards (Landing Page)
  // ============================================
  document.querySelectorAll('.requirement-card').forEach(card => {
    card.addEventListener('click', () => {
      document.querySelectorAll('.requirement-card').forEach(c => c.classList.remove('active'));
      card.classList.add('active');
    });
  });

  // ============================================
  // Form Submit Prevention
  // ============================================
  document.querySelectorAll('form').forEach(form => {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
    });
  });

  // ============================================
  // Subscribe Button Feedback
  // ============================================
  document.querySelectorAll('.subscribe-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      if (btn.classList.contains('subscribed')) {
        btn.classList.remove('subscribed');
        btn.textContent = 'Подписаться';
      } else {
        btn.classList.add('subscribed');
        btn.textContent = 'Подписан ✓';
      }
    });
  });
});

// Add fadeIn animation
const style = document.createElement('style');
style.textContent = `
  @keyframes fadeIn {
    from { opacity: 0; transform: translateY(10px); }
    to { opacity: 1; transform: translateY(0); }
  }
`;
document.head.appendChild(style);
