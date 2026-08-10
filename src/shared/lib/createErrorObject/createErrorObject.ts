export type ConditionObject = {
    errorMessage: string
    condition: boolean
}

export type ErrorObject = Record<string, ConditionObject[]> 

export const createErrorObject = (object: ErrorObject) => {
    let errors: Record<keyof ErrorObject, string[]> = {}
    let hasErrors: boolean = false
    Object.keys(object).forEach(key => errors[key] = [])

    for (let key in object) {
        object[key].forEach(el => {
            if (el.condition) {
                hasErrors = true
                errors[key].push(el.errorMessage)
            }
        })
    }

    return [errors, hasErrors]
}