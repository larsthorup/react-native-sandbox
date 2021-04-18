# react-native-sandbox

Setup your environment: https://reactnative.dev/docs/environment-setup

```bash
npm install
npm test
```

## Debug in simulator or phone

Plug in phone, or else simulator will be used.

Terminal 1:

```bash
npm start
```

Terminal 2:

```bash
npm run android
```

## Create signature for deploy to phone

Choose a password

```bash
cp android/keystore.sample.properties android/keystore.properties
nano android/keystore.properties # edit with your chosen password
keytool -genkeypair -v -storetype PKCS12 -keystore sandbox.keystore -alias sandbox -keyalg RSA -keysize 2048 -validity 10000 # input your chosen password
mv sandbox.keystore android/app
```

## Deploy to phone

```bash
npm run android:release
```
