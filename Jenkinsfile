node {
        stage('Checkout') {
            git url: 'https://github.com/HarshiniKoduru/Angular-CS.git', credentialsId: 'harshi17', branch: 'master'        }
        stage('Build') {
         
			bat 'npm run build'
	
    }
}

	

