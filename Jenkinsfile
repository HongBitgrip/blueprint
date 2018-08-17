@Library('nexus') _
pipeline {
    agent { node { label 'docker' } }
    environment {
      node {
        VERSION = readMavenPom().getVersion()
      }
    }
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
                sh "mvn -T 2 clean install -DskipTests=true"
            }
        }
        stage('publish artifacts to repository') {
            agent {
                docker {
                    label 'docker'
                    image '5.189.132.250:8083/cm9-base:1.0'
                    args ''
                    reuseNode true
                }
            }
            steps {
                script {
                    mavenPush("${workspace}/spring-boot/services/content-management-server-app", "content-management-server.jar", ${VERSION});
                }
            }
        }
    }
    post {
        always {
            sh 'docker container prune -f'
            sh 'docker volume prune -f'
            sh 'docker image prune -f'
        }
    }
}