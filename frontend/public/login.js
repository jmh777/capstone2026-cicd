const API_BASE_URL = "http://localhost:8085/api/members";

window.handleRegister = async function handleRegister() {
    const userId = document.getElementById('regUserId').value;
    const password = document.getElementById('regPassword').value;
    const name = document.getElementById('regName').value;

    const memberData = {
        userId,
        password,
        name
    };

    try {
        const response = await fetch(`${API_BASE_URL}/register`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(memberData)
        });

        if (response.ok) {
            alert('회원가입 성공');
            return;
        }

        const msg = await response.text();
        alert('회원가입 실패: ' + msg);
    } catch (error) {
        console.error('회원가입 요청 오류:', error);
        alert('회원가입 요청 중 오류가 발생했습니다.');
    }
};

window.handleLogin = async function handleLogin() {
    const userId = document.getElementById('userId').value;
    const password = document.getElementById('password').value;

    const loginData = {
        userId,
        password
    };

    try {
        const response = await fetch(`${API_BASE_URL}/login`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(loginData)
        });

        if (response.ok) {
            const user = await response.json();
            alert(`${user.name}님 환영합니다.`);
            console.log('로그인 사용자 정보:', user);
            return;
        }

        alert('로그인 실패: 아이디 또는 비밀번호를 확인하세요.');
    } catch (error) {
        console.error('로그인 요청 오류:', error);
        alert('로그인 요청 중 오류가 발생했습니다.');
    }
};
