pipeline {
    agent { node { label 'docker' } }
    stages {
        stage('build coremedia') {
            agent {
                docker {
                    label 'docker'
                    image '5.189.132.250:8083/cm9-base:1.0'
                    args ''
                    reuseNode true
                }
            }
            steps {
                sh "mvn --version"
                sh "mvn -T 2 clean install -DskipTests=true"
            }
        }
    }
}