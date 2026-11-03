const percentageForm = document.getElementById("percentage-form");

percentageForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const percentage = parseFloat(
        document.getElementById("percent-input").value
    );

    const number = parseFloat(
        document.getElementById("number-input").value
    );

    const result = (percentage / 100) * number;

    document.getElementById("percentage-result").textContent =
        percentage + "% of " + number + " = " + result;
});

const increaseForm = document.getElementById("increase-form");

increaseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const oldValue = parseFloat(
        document.getElementById("old-value").value
    );

    const newValue = parseFloat(
        document.getElementById("new-value").value
    );

    const resultElement = document.getElementById("increase-result");

    if (oldValue <= 0) {
        resultElement.textContent = "Old value must be greater than zero.";
        return;
    }

    if (newValue < oldValue) {
        resultElement.textContent = "New value must be greater than old value.";
        return;
    }

    const increase = newValue - oldValue;
    const percentageIncrease = (increase / oldValue) * 100;

    resultElement.textContent =
        "Increase: " + increase + " (" +
        percentageIncrease.toFixed(2) + "%)";
});

const decreaseForm = document.getElementById("decrease-form");

decreaseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const oldValue = parseFloat(
        document.getElementById("decrease-old-value").value
    );

    const newValue = parseFloat(
        document.getElementById("decrease-new-value").value
    );

    const resultElement = document.getElementById("decrease-result");

    if (oldValue <= 0) {
        resultElement.textContent = "Old value must be greater than zero.";
        return;
    }

    if (newValue > oldValue) {
        resultElement.textContent = "New value must be less than old value.";
        return;
    }

    const decrease = oldValue - newValue;
    const percentageDecrease = (decrease / oldValue) * 100;

    resultElement.textContent =
        "Decrease: " + decrease + " (" +
        percentageDecrease.toFixed(2) + "%)";
});

const changeForm = document.getElementById("change-form");

changeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const oldValue = parseFloat(
        document.getElementById("change-old-value").value
    );

    const newValue = parseFloat(
        document.getElementById("change-new-value").value
    );

    const resultElement = document.getElementById("change-result");

    if (oldValue === 0) {
        resultElement.textContent = "Old value cannot be zero.";
        return;
    }

    const percentageChange = ((newValue - oldValue) / Math.abs(oldValue)) * 100;

    let changeType = "No Change";

    if (percentageChange > 0) {
        changeType = "Increase";
    } else if (percentageChange < 0) {
        changeType = "Decrease";
    }

    resultElement.textContent =
        changeType + ": " + Math.abs(percentageChange).toFixed(2) + "%";
});

const discountForm = document.getElementById("discount-form");

discountForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const originalPrice = parseFloat(
        document.getElementById("original-price").value
    );

    const discountPercent = parseFloat(
        document.getElementById("discount-percent").value
    );

    const resultElement = document.getElementById("discount-result");

    if (originalPrice < 0) {
        resultElement.textContent = "Price cannot be negative.";
        return;
    }

    if (discountPercent < 0 || discountPercent > 100) {
        resultElement.textContent = "Discount must be between 0 and 100%.";
        return;
    }

    const saving = (originalPrice * discountPercent) / 100;
    const finalPrice = originalPrice - saving;

    resultElement.textContent =
        "You Save: " + saving.toFixed(2) +
        " | Final Price: " + finalPrice.toFixed(2);
});

const marksForm = document.getElementById("marks-form");

marksForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const obtainedMarks = parseFloat(
        document.getElementById("obtained-marks").value
    );

    const totalMarks = parseFloat(
        document.getElementById("total-marks").value
    );

    const resultElement = document.getElementById("marks-result");

    if (totalMarks <= 0) {
        resultElement.textContent =
            "Total marks must be greater than zero.";
        return;
    }

    if (obtainedMarks > totalMarks) {
        resultElement.textContent =
            "Obtained marks cannot be greater than total marks.";
        return;
    }

    const percentage = (obtainedMarks / totalMarks) * 100;

    resultElement.textContent =
        "Your Percentage: " + percentage.toFixed(2) + "%";
});

const whatPercentForm = document.getElementById("what-percent-form");

whatPercentForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstNumber = parseFloat(
        document.getElementById("first-number").value
    );

    const secondNumber = parseFloat(
        document.getElementById("second-number").value
    );

    const resultElement = document.getElementById("what-percent-result");

    if (secondNumber === 0) {
        resultElement.textContent =
            "Second number cannot be zero.";
        return;
    }

    const percentage = (firstNumber / secondNumber) * 100;

    resultElement.textContent =
        firstNumber + " is " + percentage.toFixed(2) +
        "% of " + secondNumber;
});

const differenceForm = document.getElementById("difference-form");

differenceForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const firstNumber = parseFloat(
        document.getElementById("difference-first").value
    );

    const secondNumber = parseFloat(
        document.getElementById("difference-second").value
    );

    const resultElement = document.getElementById("difference-result");

    const average =
        (Math.abs(firstNumber) + Math.abs(secondNumber)) / 2;

    if (average === 0) {
        resultElement.textContent =
            "Both numbers cannot be zero.";
        return;
    }

    const difference = Math.abs(firstNumber - secondNumber);

    const percentageDifference = (difference / average) * 100;

    resultElement.textContent =
        "Percentage Difference: " +
        percentageDifference.toFixed(2) + "%";
});

const reverseForm = document.getElementById("reverse-form");

reverseForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const finalValue = parseFloat(
        document.getElementById("final-value").value
    );

    const percentage = parseFloat(
        document.getElementById("reverse-percent").value
    );

    const calculationType = document.getElementById("reverse-type").value;

    const resultElement = document.getElementById("reverse-result");

    if (percentage < 0 || percentage > 100) {
        resultElement.textContent =
            "Percentage must be between 0 and 100.";
        return;
    }

    let originalValue;

    if (calculationType === "decrease") {
        if (percentage === 100) {
            resultElement.textContent =
                "Original value cannot be calculated after a 100% decrease.";
            return;
        }

        originalValue = finalValue / (1 - percentage / 100);

    } else {
        originalValue = finalValue / (1 + percentage / 100);
    }

    resultElement.textContent =
        "Original Value: " + originalValue.toFixed(2);
});

const subjectCount = document.getElementById("subject-count");
const gpaSubjects = document.getElementById("gpa-subjects");

function generateGpaSubjects() {
    const count = parseInt(subjectCount.value);

    gpaSubjects.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const subjectDiv = document.createElement("div");

        subjectDiv.className = "gpa-subject";

        subjectDiv.innerHTML = `
            <h4>Subject ${i}</h4>

            <label for="grade-${i}">Grade</label>
            <select id="grade-${i}" required>
                <option value="4.0">A (4.0)</option>
                <option value="3.7">A- (3.7)</option>
                <option value="3.3">B+ (3.3)</option>
                <option value="3.0">B (3.0)</option>
                <option value="2.7">B- (2.7)</option>
                <option value="2.3">C+ (2.3)</option>
                <option value="2.0">C (2.0)</option>
                <option value="1.0">D (1.0)</option>
                <option value="0.0">F (0.0)</option>
            </select>

            <label for="credit-${i}">Credit Hours</label>
            <input
                id="credit-${i}"
                type="number"
                min="0.5"
                max="6"
                step="0.5"
                value="3"
                required
            >
        `;

        gpaSubjects.appendChild(subjectDiv);
    }
}

subjectCount.addEventListener("change", generateGpaSubjects);

generateGpaSubjects();

const gpaForm = document.getElementById("gpa-form");

gpaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const count = parseInt(subjectCount.value);

    let totalGradePoints = 0;
    let totalCreditHours = 0;

    const resultElement = document.getElementById("gpa-result");

    for (let i = 1; i <= count; i++) {
        const grade = parseFloat(
            document.getElementById("grade-" + i).value
        );

        const creditHours = parseFloat(
            document.getElementById("credit-" + i).value
        );

        if (!Number.isFinite(creditHours) || creditHours <= 0) {
            resultElement.textContent =
                "Credit hours must be greater than zero.";
            return;
        }

        totalGradePoints += grade * creditHours;
        totalCreditHours += creditHours;
    }

    const gpa = totalGradePoints / totalCreditHours;

    resultElement.textContent =
        "Your GPA: " + gpa.toFixed(2) + " / 4.00";
});

const semesterCount = document.getElementById("semester-count");
const cgpaSemesters = document.getElementById("cgpa-semesters");

function generateCgpaSemesters() {
    const count = parseInt(semesterCount.value);

    cgpaSemesters.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const semesterDiv = document.createElement("div");

        semesterDiv.className = "cgpa-semester";

        semesterDiv.innerHTML = `
            <h4>Semester ${i}</h4>

            <label for="semester-gpa-${i}">Semester GPA</label>
            <input
                id="semester-gpa-${i}"
                type="number"
                min="0"
                max="4"
                step="0.01"
                placeholder="e.g. 3.50"
                required
            >

            <label for="semester-credits-${i}">Credit Hours</label>
            <input
                id="semester-credits-${i}"
                type="number"
                min="0.5"
                max="60"
                step="0.5"
                placeholder="e.g. 15"
                required
            >
        `;

        cgpaSemesters.appendChild(semesterDiv);
    }
}

semesterCount.addEventListener("change", generateCgpaSemesters);

generateCgpaSemesters();

const cgpaForm = document.getElementById("cgpa-form");

cgpaForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const count = parseInt(semesterCount.value);

    let totalGradePoints = 0;
    let totalCreditHours = 0;

    const resultElement = document.getElementById("cgpa-result");

    for (let i = 1; i <= count; i++) {
        const semesterGpa = parseFloat(
            document.getElementById("semester-gpa-" + i).value
        );

        const creditHours = parseFloat(
            document.getElementById("semester-credits-" + i).value
        );

        if (!Number.isFinite(semesterGpa) || semesterGpa < 0 || semesterGpa > 4) {
            resultElement.textContent =
                "Semester GPA must be between 0 and 4.";
            return;
        }

        if (!Number.isFinite(creditHours) || creditHours <= 0) {
            resultElement.textContent =
                "Credit hours must be greater than zero.";
            return;
        }

        totalGradePoints += semesterGpa * creditHours;
        totalCreditHours += creditHours;
    }

    const cgpa = totalGradePoints / totalCreditHours;

    resultElement.textContent =
        "Your CGPA: " + cgpa.toFixed(2) + " / 4.00";
});

const gradeForm = document.getElementById("grade-form");

gradeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const percentage = parseFloat(
        document.getElementById("grade-percentage").value
    );

    const resultElement = document.getElementById("grade-result");

    if (percentage < 0 || percentage > 100) {
        resultElement.textContent =
            "Percentage must be between 0 and 100.";
        return;
    }

    let grade;

    if (percentage >= 80) {
        grade = "A+";
    } else if (percentage >= 70) {
        grade = "A";
    } else if (percentage >= 60) {
        grade = "B";
    } else if (percentage >= 50) {
        grade = "C";
    } else if (percentage >= 40) {
        grade = "D";
    } else {
        grade = "F";
    }

    resultElement.textContent =
        "Your Grade: " + grade;
});

const finalGradeForm = document.getElementById("final-grade-form");

finalGradeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const currentGrade = parseFloat(
        document.getElementById("current-grade").value
    );

    const finalWeight = parseFloat(
        document.getElementById("final-weight").value
    );

    const targetGrade = parseFloat(
        document.getElementById("target-grade").value
    );

    const resultElement = document.getElementById("final-grade-result");

    if (currentGrade < 0 || currentGrade > 100) {
        resultElement.textContent = "Current grade must be between 0 and 100.";
        return;
    }

    if (finalWeight <= 0 || finalWeight > 100) {
        resultElement.textContent = "Final exam weight must be between 0 and 100.";
        return;
    }

    if (targetGrade < 0 || targetGrade > 100) {
        resultElement.textContent = "Target grade must be between 0 and 100.";
        return;
    }

    const weight = finalWeight / 100;

    const requiredMarks =
        (targetGrade - (currentGrade * (1 - weight))) / weight;

    if (requiredMarks > 100) {
        resultElement.textContent =
            "Your target is not achievable with the remaining final exam.";
    } else if (requiredMarks <= 0) {
        resultElement.textContent =
            "You have already achieved your target grade.";
    } else {
        resultElement.textContent =
            "Required Final Exam Marks: " + requiredMarks.toFixed(2) + "%";
    }
});

const weightedItemCount = document.getElementById("weighted-item-count");
const weightedGradeItems = document.getElementById("weighted-grade-items");

function generateWeightedGradeItems() {
    const count = parseInt(weightedItemCount.value);
    weightedGradeItems.innerHTML = "";

    for (let i = 1; i <= count; i++) {
        const itemDiv = document.createElement("div");
        itemDiv.className = "weighted-grade-item";

        itemDiv.innerHTML = `
            <h4>Grade Item ${i}</h4>

            <label for="weighted-score-${i}">Score (%)</label>
            <input
                id="weighted-score-${i}"
                type="number"
                min="0"
                max="100"
                step="any"
                placeholder="e.g. 85"
                required
            >

            <label for="weighted-weight-${i}">Weight (%)</label>
            <input
                id="weighted-weight-${i}"
                type="number"
                min="0.01"
                max="100"
                step="any"
                placeholder="e.g. 20"
                required
            >
        `;

        weightedGradeItems.appendChild(itemDiv);
    }
}

weightedItemCount.addEventListener("change", generateWeightedGradeItems);
generateWeightedGradeItems();

const weightedGradeForm = document.getElementById("weighted-grade-form");

weightedGradeForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const count = parseInt(weightedItemCount.value);
    let totalWeightedScore = 0;
    let totalWeight = 0;

    const resultElement = document.getElementById("weighted-grade-result");

    for (let i = 1; i <= count; i++) {
        const score = parseFloat(
            document.getElementById("weighted-score-" + i).value
        );

        const weight = parseFloat(
            document.getElementById("weighted-weight-" + i).value
        );

        if (!Number.isFinite(score) || score < 0 || score > 100) {
            resultElement.textContent = "Each score must be between 0 and 100.";
            return;
        }

        if (!Number.isFinite(weight) || weight <= 0 || weight > 100) {
            resultElement.textContent = "Each weight must be greater than 0 and no more than 100.";
            return;
        }

        totalWeightedScore += score * weight;
        totalWeight += weight;
    }

    if (Math.abs(totalWeight - 100) > 0.01) {
        resultElement.textContent =
            "The weights must add up to 100%. Your weights total " +
            totalWeight.toFixed(2) + "%.";
        return;
    }

    const weightedGrade = totalWeightedScore / totalWeight;

    resultElement.textContent =
        "Your Weighted Grade: " + weightedGrade.toFixed(2) + "%";
});

const examMarksForm = document.getElementById("exam-marks-form");

examMarksForm.addEventListener("submit", function(event) {
    event.preventDefault();

    const totalMarks = parseFloat(
        document.getElementById("exam-total-marks").value
    );

    const currentMarks = parseFloat(
        document.getElementById("exam-current-marks").value
    );

    const targetPercent = parseFloat(
        document.getElementById("exam-target-percent").value
    );

    const resultElement = document.getElementById("exam-marks-result");

    if (totalMarks <= 0) {
        resultElement.textContent = "Total marks must be greater than zero.";
        return;
    }

    if (currentMarks < 0 || currentMarks > totalMarks) {
        resultElement.textContent =
            "Current marks must be between 0 and total marks.";
        return;
    }

    if (targetPercent < 0 || targetPercent > 100) {
        resultElement.textContent =
            "Target percentage must be between 0 and 100.";
        return;
    }

    const requiredMarks = (targetPercent / 100) * totalMarks - currentMarks;

    if (requiredMarks > totalMarks - currentMarks) {
        resultElement.textContent =
            "Your target percentage is not achievable with the remaining marks.";
        return;
    }

    if (requiredMarks <= 0) {
        resultElement.textContent =
            "You have already achieved your target percentage.";
        return;
    }

    resultElement.textContent =
        "You need " + requiredMarks.toFixed(2) +
        " more marks to reach your target.";
});

const guideAccordionItems = document.querySelectorAll(".content-item");

guideAccordionItems.forEach(function(item) {
    const heading = item.querySelector("h3");

    if (!heading) {
        return;
    }

    const toggle = document.createElement("button");
    toggle.type = "button";
    toggle.className = "content-toggle";
    toggle.textContent = heading.textContent;
    toggle.setAttribute("aria-expanded", "false");

    const content = document.createElement("div");
    content.className = "content-item-body";

    while (heading.nextSibling) {
        content.appendChild(heading.nextSibling);
    }

    heading.replaceWith(toggle);
    item.appendChild(content);

    content.hidden = true;

    toggle.addEventListener("click", function() {
        const isOpening = content.hidden;

        content.hidden = !isOpening;
        toggle.setAttribute("aria-expanded", String(isOpening));
        toggle.classList.toggle("active", isOpening);
    });
});