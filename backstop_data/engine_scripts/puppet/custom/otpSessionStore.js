
module.exports = async page => {


    console.log('inicia otpSessionStore');

    await page.evaluateOnNewDocument    (() => {

        sessionStorage.setItem('_xa_a', '{"name":"SERGIO","lastName":"ALONSO","middleName":"","secondLastName":"GARZON","customerIdentification":"79811281","phone":"3504676721","email":" ","nut":"AG798112812365378320","userIdentification":"79811281","habeasData":true,"checkSarlaft":true}');
        sessionStorage.setItem('_xa_a_c', 'U2FsdGVkX195okzFdF+fQFjx0GWWHrqoOZ7LUTTSRrbvswfuh1Y0KgfA48PC/VIKoiXjfosMRAw4WrBkyhAGhzw516SD2Y7p462jjglvmJpEoavo4ZHrZtJ92R/lPI71onSbk93QbUGEBDkuoplRO2YfS+yqEp2Hr+mxkzBGXz9zNA6I9xrer8ehzHINi0wSW8TKnsv96PBecf1MSyiSlY9Lv26OSTbVrl1hJ2cJgWlbjJQsqBV7fxH+Wx4QK0yH9I5sTHsmV/cOX+hgbJf4HfnbQE56XcEM7l/+uOBkd+lAS8AIc1FZ68FNmJIeRaa4KeCPb2kI8HDTjQK1csD+v5yu5YvrfqpARq2G21UEtFA=');
        sessionStorage.setItem('_a_cd', 'U2FsdGVkX1/6V2pfxO5l/w8STDugn0MmUy1GAUrfgXL0vq8kv2Xl8xFSYMRM9oq8w52XKV0LH9XU9rsl9Jmun0agDHYmtuw7Byv/DERfg74od7HBgelfTl5JtRIeU2CIZk5BnoqGhUPVhh/bHXJo/yPpnDTwqx4ckyI3KjjfqH+0GDYE20zhf4k06YqzH1TbGcr74RAZ0EoZqcoNHwZdZM77Zwem+qfy6pGP538bxdEWvIIXjhQCKVObC8mznF7ABjwugCSyjaXS9QH+e01vSEf5KCkysnfR7Y4ctMK3CRsXBLYu2hFaEPCUh8r6UCslACluvjo/wsMJU1hQIlKI6KFfMpl+4A8M4MVVV035YQs=');
        sessionStorage.setItem('_a_ot', 'U2FsdGVkX182XtHeFz8+mp2vgwTepsu4PaUYHQqWqhLE1rZvbxUDJbVSsbt4+MNwHhBQBTOo0CQpZn+ak362TUWebuTQSgVzpXf6MigHRfGDp3K+1p+zTxfoFMs2Jnfz10NDxXK3r+JnU2Q9YrSis9dr3kj6Fgnemkb0piFVLf+NvxZxHvPCApL0dkOSyMAre+/d9lufJ074ISI0xN/SZ5G/uiZ58RLck/E+1GoRA5+05vQCYpPyYPjQZrJgmX6Z+N0fBmT5Y6tekflj5/pCURxSsl7ZUuimTfEu92KfCDwjfdzk+n4QAFY0BNozfQ715iF0v/151AOsN8JxR7YASKEWK3OFyLTQlF2EMfTLUiM=');

      });

}