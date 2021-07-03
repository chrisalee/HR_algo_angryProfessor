/*
 * Complete the 'angryProfessor' function below.
 *
 * The function is expected to return a STRING.
 * The function accepts following parameters:
 *  1. INTEGER k
 *  2. INTEGER_ARRAY a
 */

const angryProfessor = (k, a) => {
    let numStudentOnTime = 0;

    for(let student of a) {
        if(student <= 0) {
            numStudentOnTime++;
        } else {
            continue;
        }
    }
    if(numStudentOnTime >= k) {
        console.log("NO");
        return "NO";
    } else {
        console.log("YES");
        return "YES"
    }
}
