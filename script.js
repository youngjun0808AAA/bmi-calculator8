document.getElementById('bmiForm').addEventListener('submit', function(event) {
    event.preventDefault(); // 폼 제출 기본 동작 막기

    const weight = parseFloat(document.getElementById('weight').value); // 체중 값
    const height = parseFloat(document.getElementById('height').value) / 100; // 키를 cm에서 m로 변환

    if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
        alert("체중과 키를 정확하게 입력하세요.");
        return;
    }

    const bmi = (weight / (height * height)).toFixed(2); // BMI 계산

    // 결과 출력
    document.getElementById('bmiResult').textContent = bmi;
    document.getElementById('result').style.display = 'block';

    // BMI 카테고리 분류
    let category = '';
    if (bmi < 18.5) {
        category = '저체중';
    } else if (bmi >= 18.5 && bmi < 24.9) {
        category = '정상체중';
    } else if (bmi >= 25 && bmi < 29.9) {
        category = '과체중';
    } else {
        category = '비만';
    }

    document.getElementById('bmiCategory').textContent = `당신의 BMI는 ${category}입니다.`;
});
