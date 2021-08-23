  /** formatting the date, used for publishedAt date of article
   * @params date - takes the stringified date from the news api
   * @return string of date 'hh:mm - dd/mm/yyyy' or 'hh:mm - Today'
   * */
   const formatDate = (date: string): string => {
    /** publishedAt date of article as Date object */
    const d = new Date(date);
    /** right now as Date object, for purpose of  'is article from today' */
    const now = new Date();
    /** return hour or minute as 2 digit number */
    const addZeroToSingleDigit = (t: number) => {
      // turn number to string (so can check length)
      let tStr = t + '';
      return tStr.length === 1 ? `0${tStr}` : tStr;
    };
    /** what day was this published on, can be either 'Today' or 'dd/mm/yyyy' */
    const day =
      d.getDate() === now.getDate() && d.getMonth() === now.getMonth()
        ? 'Today'
        : `${d.getDate()}/${d.getMonth() + 1}/${d.getFullYear()}`;
    /** what time was this article published at? as hh:mm */
    const time = `${addZeroToSingleDigit(d.getHours())}:${addZeroToSingleDigit(
      d.getMinutes(),
    )}`;

    return `${time} - ${day}`;
  };

  export default formatDate;