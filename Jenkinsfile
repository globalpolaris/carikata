pipeline {
  agent any

  environment {
    Version_Major = 1
    Version_Minor = 0
    Version_Patch = 0
    IMAGE_NAME = "10.52.51.109:5000/carikatla"
    IMAGE_TAG = "${Version_Major}.${Version_Minor}.${Version_Patch}-${BUILD_TIMESTAMP}-${env.BUILD_NUMBER}"
    CLUSTER_CONTEXT = credentials('cluster-context')
    CLUSTER_USER = credentials('cluster-user')
    CI = false
  }

  stages {
    stage('build') {
      steps {
        nodejs(nodeJSInstallationName: 'Node 16') {
          sh """
            echo "*** building ***"
            CI=${CI}
            npm install
            npm run build
          """
        }
      }
    }
    stage('push image') {
      steps {
        sh """
          echo "*** pushing image ***"
          docker build -t ${IMAGE_NAME}:${IMAGE_TAG} .
          docker push ${IMAGE_NAME}:${IMAGE_TAG}
        """
      }
    }
    stage('helm') {
      steps {
        sh """
          echo "*** deploying ***"
          kubectl config set-context ${CLUSTER_CONTEXT} --cluster=kubernetes --user=${CLUSTER_USER}
          kubectl config use-context ${CLUSTER_CONTEXT}
          helm upgrade -i carikatla helm/carikatla -f helm/carikatla/values.yaml -n carikatla --set=image.tag=${IMAGE_TAG}
          kubectl rollout status deployment/carikatla -n carikatla
          kubectl get pods -n carikatla
          helm ls -n carikatla
        """
      }
    }
  }
}
