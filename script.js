const students = [
    {
        name: 'Tyler',
        test1: 8,
        test2: 7.3,
    },
    {
        name: 'Bale',
        test1: 8.3,
        test2: 7.6,
    },
    {
        name: 'Morfeo',
        test1: 5,
        test2: 7,
    },
]

function average(test1, test2) {
    return ((test1 + test2) / 2).toFixed(2)
}

function printResult(student) {

    let result = average(student.test1, student.test2)
    
    console.log(result)

    if (result < 7) {
        return `
        A média do aluno ${student.name} é: ${average(student.test1, student.test2)}
        Não foi dessa vez, ${student.name}! Tente novamente.
        `
    } else {
        return `
        A média do aluno ${student.name} é: ${average(student.test1, student.test2)}
        Parabéns, ${student.name}! Você passou no concurso.
        `
    }
}

for (let student of students) {
    let classMessage = printResult(student)
    alert(classMessage)
}
