// export const maxLength = (maxLength) => {
//     return (value) => {
//         return value && value.length > maxLength
//             ? `Вы ввели больше чем ${maxLength} символов`
//             : undefined
//     }
// }

export const required = value => (value || typeof value === 'number' ? undefined : 'Пусто')

export const maxLength = max => value =>
    value && value.length > max ? `Must be ${max} characters or less` : undefined