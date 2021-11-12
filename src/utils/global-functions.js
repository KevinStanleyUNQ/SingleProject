export const removeToken = () => {
    localStorage.removeItem("token");
}


export const convertSecondToMinAndSec = (seconds) => {
    var minute = Math.floor((seconds / 60) % 60);
    minute = minute < 10 ? "0" + minute : minute;

    var second = seconds % 60;
    second = second < 10 ? "0" + second : second;

    return minute + ":" + second;
  };
