node('nodejs8') {
  stage 'checkout'
    checkout scm
  stage 'build'
  sh '''
    pwd
    ls -l
    npm install -d
    npm install --save classlist.js
    $(npm bin)/ng build --prod --build-optimizer
    rm -rf node_modules
    oc start-build clarksnut-ui --from-dir=. --follow
  '''
}
