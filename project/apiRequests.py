


def getMonthlyOrWeeklyData(ticker, timeParam):
  ticker = ticker.upper()
  r = requests.get('https://www.quandl.com/api/v1/datasets/GOOG/NASDAQ_'+ ticker +'.json?auth_token=ezzqdBWFN_Cm5xbN-sow?exclude_headers=true&collapse='+timeParam)
  dirtyApiData = r.json()
  return cleanData(dirtyApiData)
