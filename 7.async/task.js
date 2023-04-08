class AlarmClock {
	constructor() {
		this.alarmCollection = [];
    this.intervalId = null;
	}

    addClock(alarmTime, alarmAction) {
      if (arguments.length < 2) {
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

      console.log(this.alarmCollection);
    }

    removeClock(alarmTime) {
      this.alarmCollection = this.alarmCollection.filter(item => item.time != alarmTime);

      console.log(this.alarmCollection);
    }

    getCurrentFormattedTime() {
      const currentDate = new Date();
      return currentDate.getHours().toString() + ":" + currentDate.getMinutes().toString();
    }

    start() {
      if (this.intervalId !== null) {
        return;
      }
      this.intervalId = setInterval(() => this.alarmCollection.forEach(item => {
        if (item.time === this.getCurrentFormattedTime() && item.canCall === true) {
          item.canCall = false;
          item.callback;
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
