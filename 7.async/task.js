class AlarmClock {
  constructor() {
    this.alarmCollection = [];
    this.intervalId = null;
  }

  addClock(alarmTime, alarmAction) {
    if (alarmTime === null || alarmAction === null || arguments.length < 2) {
      throw new Error("Отсутствуют обязательные аргументы");
    }

    if (this.alarmCollection.find(item => item.time === alarmTime)) {
      console.warn('Уже присутствует звонок на это же время');
    }

    this.alarmCollection.push({
    callback: alarmAction,
    time: alarmTime,
    canCall: true
    });
  }

  removeClock(alarmTime) {
    this.alarmCollection = this.alarmCollection.filter(item => item.time != alarmTime);
  }

  getCurrentFormattedTime() {
    const currentDate = new Date();

    let hours = currentDate.getHours().toString();
    if (hours.length === 1) {
      hours = "0" + hours;
    }

    let minutes = currentDate.getMinutes().toString();
    if (minutes.length === 1) {
      minutes = "0" + minutes;
    }

    return hours + ":" + minutes;
  }

  start() {
    if (this.intervalId !== null) {
      return;
    }
    this.intervalId = setInterval(() => this.alarmCollection.forEach(item => {
      if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
        item.canCall = false;
        item.callback();
      }
    }), 1000);
  }

  stop() {
    clearInterval(this.intervalId);
    this.intervalId = null;
  }

  resetAllCalls() {
    this.alarmCollection.forEach(item => item.canCall = true);
  }

  clearAlarms() {
    this.stop();
    this.alarmCollection = [];
  }

}
