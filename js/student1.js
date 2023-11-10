class Student {
    constructor(name, surname, birthYear, rating) {
      this.name = name;
      this.surname = surname;
      this.birthYear = birthYear;
      this.rating = rating;
      this.visitingList = new Array(25);
      this.visitingCount = 0;
    }
  
    getAge() {
      const momentYear = new Date().getFullYear();
      return momentYear - this.birthYear;
    }
  
    getAveragePoint() {
      if (this.rating.length === 0) {
        return null;
      }
      const sum = this.rating.reduce((a, b) => a + b);
      return sum / this.rating.length;
    }
  
    present() {
      if (this.visitingCount >= this.visitingList.length) {throw new Error('Масив відвідувань переповнений!');}
      this.visitingList[this.visitingCount] = true;
        this.visitingCount++;
    }
  
    absent() {
      if (this.visitingCount > this.visitingList.length) {alert('Масив відвідувань переповнений!');}
      this.visitingList[this.visitingCount] = false;
      this.visitingCount++;
    }
  
    summary() {
        const averagePoint = this.getAveragePoint();
        const visitingCount = this.visitingList.filter((value) => value !== null)
          .length;
        const visitRating = visitingCount / this.visitingList.length;
        if (averagePoint === null) {
          return 'Поки оцінки відсутні';
        }
        if (averagePoint > 90 && visitRating > 0.9) {
          return "Молодець!";
        }
        if (averagePoint > 90 || visitRating > 0.9) {
          return 'Добре, але можна краще';
        }
        return 'Редиска!';
      }
    
  }
  
  
  const kavun = new Student('Ihor', 'Kavun', 1983, [80, 90, 95, 100]);
  const ivankin = new Student('Sergey', 'Ivankin', 1989, [90, 80, 100, 100]);
  const petrova = new Student('Masha', 'Petrova', 1985, [100, 100, 100, 100]);
  
  console.log(ivankin)
  console.log(petrova)
  console.log(kavun)

  console.log('Повних років', kavun.getAge());
  console.log('Середній бал',kavun.getAveragePoint());
  console.log(kavun.summary());

  kavun.absent()
  petrova.present()
  kavun.absent()
  ivankin.absent()
  kavun.present()
  kavun.absent()
  petrova.absent()
  kavun.present()
  ivankin.present()
  kavun.absent()
  petrova.absent()
  kavun.present()
  ivankin.absent()
  kavun.absent()
  kavun.present()
  petrova.absent()
  kavun.absent()
  kavun.present()
  kavun.absent()
  