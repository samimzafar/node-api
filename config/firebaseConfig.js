const admin = require("firebase-admin");
let serviceAccount = {
  type: "service_account",
  project_id: "hyped-app-a87df",
  private_key_id: "933c80d6daacd4436a32c2c302ab47184ba9d546",
  private_key:
    "-----BEGIN PRIVATE KEY-----\nMIIEvgIBADANBgkqhkiG9w0BAQEFAASCBKgwggSkAgEAAoIBAQC1f3GFMSnSdPyR\n3dTP+lAqbWRWTLCTP5qDA2lnMsRXrzLid5uwwlWiZt6TP+IT4k2CmrSEJZg/zvvS\nx7+ZL6wL/NUrtJ2G8J3LGn+OhVeqbjmhte6yhBKHHbbg9SDMgxBExlbgP/UugEBa\nbH+9APzRxTNDSuBzhKWSim4AGOykxsHjxgn4Q6Jkzxz8tKrrD5aoy4EGWwqrlkqC\nasEDYJpY75QaJlBsk4rzj8Sxemv4vmZ3L4BSaJaZvlYoFkshdpysARyxkKlJw39r\nPQunM0dczNhqW4hbla86gpBuXd57xy441MfogL89eiXXk2JHMbESIJJn4BxLS7kv\nu10Vli3NAgMBAAECggEAAOa4RChMxZHVSDz203QDf9lYE12J/NXsrWzqHbwju5dH\nVFayNZtUtR63yS2gsLK5GH258hE5RO6Sk2nZX7ynkbarcSKMlIU1OBvyarSZZIwx\nhu6/OsHuLkJDWwLXgmAbPCSOcb7ad8H8agC3VQfdYkBHrvRWWAjeVpwyaN1lXW4A\no5P2O1dRdQiSzWhpJBIIYMt8WGL1Pp9Jw4A8WQujod/F4PQOG0TxHXjnom+0mW1F\nKcvupPP8jBactSIiR9yspZKMVMZ/bPJ59+/9QRE7O8jKEoOCGGCoHKaq5s+7fkZx\nsg2Y24bPM5wQIyIL80KnM3hH5mkyauHeT3ApeYVvuQKBgQDXwtmrsoysT8JZrijy\nRd7Zf+fHSrDhLRXpzetMQIEdmDSC1b1MG0bfX5KcxdsQdXPeJYxsF2CeDJhtE7CJ\nNdCdzL/tL3K9hCCy4z48+I3VfbrcU+EMhU0xT2jJnGM11mbVEUXR0aUXtor/6R3I\n2fmSDvqgSdt5ocVIKz5so8sv9QKBgQDXWL/kv1HSPtxxFMYuTLLznBjyRoUIaOWE\nEs59dhiBKIkPOtf+ibijmbG7iqtBF4QQzaM7lOjvEhLHwgyl32Iog2KofJ6qbyn4\nz+ZFQrC4yEsKPdGpiNm+aeygzzpMY0aXOvVrvR7XKkJbQFvA1tpBInw9V2uyLAJC\nJlFZUVeXeQKBgQCfF6nxFKLtm5IvFmBS5HpB3jJFnSl3oAr8bz4E57tM2yI9JuWB\n7MsBgjNVLf8tz600LHOycDppz9fE9jPBuNCuyn7qoYX1gCusPCt0QcIznZXfSGo1\nFUWqCme14X61//WrPiVBZVhad9tef8Hai/+eVzUuY8dVlJcnc9t/t/bm0QKBgAgr\nL6xHrZziEY6gkRv0gN1I0JFwJ1+4SuyFohuUPT25Aen3+3WGV+Cs1dcdXX2snK/e\nfRCnh2Z6MwgszjoEjT6oLTfi8knYyajMihmafAWmY2JSEf/yVwAoGHfJJJb9NRJL\nhD+//sl+quG3QUPBYqoR2tCg3k716GgF+BQBR+dRAoGBANHDU8wtUJrSHQBbSSHv\nU6If3Ac3gJq3RPg0GkjMwF/daVFHKN62CHGvQx9kizicAxw3k+eLYWkHeCRTuWfD\ndiEc3csypjBHesGSdKrE4lRvL4K57CpvUy731UJ0WcBVNob5SyHn/96vGBjPOHRy\n9iROuxCfEZJ7v9nQ9R0Jfh22\n-----END PRIVATE KEY-----\n",
  client_email:
    "firebase-adminsdk-god5z@hyped-app-a87df.iam.gserviceaccount.com",
  client_id: "104584555414674417191",
  auth_uri: "https://accounts.google.com/o/oauth2/auth",
  token_uri: "https://oauth2.googleapis.com/token",
  auth_provider_x509_cert_url: "https://www.googleapis.com/oauth2/v1/certs",
  client_x509_cert_url:
    "https://www.googleapis.com/robot/v1/metadata/x509/firebase-adminsdk-god5z%40hyped-app-a87df.iam.gserviceaccount.com",
};
admin.initializeApp({
  credential: admin.credential.cert(serviceAccount),
  databaseURL: "https://hyped-app-a87df.firebaseio.com",
});

module.exports = admin;
