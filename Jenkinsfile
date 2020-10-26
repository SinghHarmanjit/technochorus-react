pipeline {
    agent {
        docker {
            image 'node:current-alpine'
            args '--publish 3000:3000' 
        }
    }
    stages {
        stage('Build') { 
            steps {
                sh 'yarn install' 
            }
        }
        stage('Test') { 
            steps {
                sh 'yarn test' 
            }
        }
    }
}