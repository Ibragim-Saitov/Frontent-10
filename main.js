//Объект

   let man = {
   name: 'Ibrahim',
   surname: 'Saitov',
   age: 16,
   height: 167,
   login: 'saitov',
   password: 33653452,
   summa: 6000,
   address: {
      country: "Russia",
      respublic: "Chechen ",
      district: "Grozny District",
      villade: "Suyr Kort",
      street: "Verkhnyaa",
      home: 31,
    },
   };
   console.log(man);

 //2 
 let text = prompt ("Введите пароль");
 if (text === man.password) {
    console.log(`Добро пожаловать ${man.name} ${man.surname}. Ваш логин ${man.login}`);
 } else {
    console.log(`Указанный пароль ${text} не верен. Попробуйте еще раз`);
 } 

</script>
</body>
</html>
