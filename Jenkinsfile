node {
        stage('Checkout') {
            git url: 'https://github.com/HarshiniKoduru/RealEstate-Property-angular.git', credentialsId: 'harshi17', branch: 'master'        }
        stage('Build') {
         
			bat 'npm run build'
	
    }
}

	

