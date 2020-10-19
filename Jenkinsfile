node {
        stage('Checkout') {
            git url: 'https://github.com/HarshiniKoduru/Angular-CS.git', credentialsId: 'harshi17', branch: 'main'        }
        stage('Build') {
         
			bat 'npm install'
          bat 'ng build'
	
    }
}

	

