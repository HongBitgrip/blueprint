pipeline {
    agent { node { label 'docker' } }
    stages {
        stage('build coremedia') {
            agent {
                docker {
                    label 'docker'
                    image 'cm9-base'
                    args ''
                    reuseNode true
                }
            }
            steps {
                sh "mvn --version"
                sh "echo $MAVEN_HOME"
                sh "mvn -T 2 clean install -DskipTests=true"
            }
        }
    }
}