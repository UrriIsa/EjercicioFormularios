 let correctAnswer = 0;

function generateMathProblem() {
    const num1 = Math.floor(Math.random() * 50) + 1;
    const num2 = Math.floor(Math.random() * 50) + 1;
    correctAnswer = num1 + num2;
    
    document.getElementById('mathProblem').textContent = `¿Cuánto es ${num1} + ${num2}?`;
    document.getElementById('verification').value = '';
    document.getElementById('verificationMessage').innerHTML = '';
    document.getElementById('verification').classList.remove('error', 'success');
}

function validateVerification() {
    const userAnswer = parseInt(document.getElementById('verification').value);
    const verificationInput = document.getElementById('verification');
    const messageDiv = document.getElementById('verificationMessage');

    if (userAnswer === correctAnswer) {
        verificationInput.classList.remove('error');
        verificationInput.classList.add('success');
        messageDiv.innerHTML = '<div class="message success-message">✓ Verificación correcta</div>';
        return true;
    } else {
        verificationInput.classList.remove('success');
        verificationInput.classList.add('error');
        messageDiv.innerHTML = '<div class="message error-message">✗ Respuesta incorrecta. Intenta de nuevo.</div>';
        return false;
    }
}

// Generar problema matemático al cargar la página
window.onload = function() {
    generateMathProblem();
};

// Validar en tiempo real cuando el usuario escribe
document.getElementById('verification').addEventListener('input', function() {
    if (this.value !== '') {
        validateVerification();
    }
});