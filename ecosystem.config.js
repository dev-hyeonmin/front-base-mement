module.exports = {
  apps: [
    {
      name: 'homepage',
      script: 'npm', // npm 명령 실행
      args: 'run serve -w homepage', // 실행할 npm 명령 및 인수
      cwd: './', // 프로젝트 디렉토리 경로
      autorestart: true, // 프로세스 실패 시 자동으로 재시작할지 선택
      watch: false, // 파일 변경시 재시작 여부
      // max_memory_restart: '1G', // 프로그램의 메모리 크기가 일정 크기 이상이 되면 재시작
      env: {
        NODE_ENV: 'production',
      },
    },
    // 다른 앱 설정을 추가할 수 있습니다.
  ],
};
