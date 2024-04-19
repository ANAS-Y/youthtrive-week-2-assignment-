function scoreCategory(score) {
    if (score >= 90) {
        return "Excellent";
    } else if (score >= 80) {
        return "Very Good";
    } else if (score >= 70) {
        return "Pass";
    } else {
        return "Fail";
    }
}

function displayCategory() {
    const score = document.getElementById("scoreInput").value;
    const category = scoreCategory(parseInt(score));
    document.getElementById("result").innerText = category;
}
