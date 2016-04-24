class Variable
  transform : (transform_obj)->
    transform_obj

  arrayChecker : (arr) ->
    varName = ""
    for key, value of Lib::varset
      if arrayEqual(arr, value)
        varName = key
    varName
    
  log : (arr ) =>
    LogArray = ( Math.log(num) for num in arr)
    if append
      varName = arrayChecker(arr)
      varset[varName + '_log'] = LogArray
      variables
    else
      LogArray


  exp : (arr ) =>
    ExpArray = ( Math.exp(num) for num in arr)
    if append
      varName = arrayChecker(arr)
      varset[varName + '_exp'] = ExpArray
      variables
    else
      ExpArray

  sin : (arr ) =>
    SinArray = ( Math.sin(num) for num in arr)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_sin'] = SinArray
      variables
    else
      SinArray


  cos : (arr ) =>
    CosArray = ( Math.cos(num) for num in arr)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_cos'] = CosArray
      variables
    else
      CosArray


  tan : (arr ) =>
    TanArray = ( Math.tan(num) for num in arr)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_tan'] = TanArray
      variables
    else
      TanArray

  asin : (arr ) =>
    AsinArray = ( Math.asin(num) for num in arr)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_asin'] = AsinArray
      variables
    else
      AsinArray


  acos : (arr ) =>
    AcosArray = ( Math.acos(num) for num in arr)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_acos'] = AcosArray
      variables
    else
      AcosArray


  atan : (arr ) =>
    AtanArray = ( Math.atan(num) for num in arr)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_atan'] = AtanArray
      variables
    else
      AtanArray

  atanh : (arr ) =>
    AtanhArray = ( Math.atanh(num) for num in arr)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_atanh'] = AtanhArray
      variables
    else
      AtanhArray


  sign : (arr ) =>
    SignArray = (`num >= 0 ? 1 : -1` for num in arr )
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_sign'] = SignArray
      variables
    else
      SignArray


  pow : (arr, pow ) =>
    PowArray = ( Math.pow(num, pow) for num in arr )
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_pow'] = PowArray
      variables
    else
      PowArray

  mean : (arr ) =>
    Sum = arr.reduce(((a, b)-> a + b ), 0)
    Count = arr.length
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_mean'] = Sum / Count
      variables
    else
      Sum / Count

  median : (arr ) =>
    index = Math.floor(arr.length / 2)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_median'] = arr[index]
      variables
    else
      arr[index]


  mode : (arr ) =>
    frequency = {}
    max = 0
    result
    for v in arr
      frequency[arr[v]] = (frequency[arr[v]] || 0) + 1
      if(frequency[arr[v]] > max)
        max = frequency[arr[v]]
        result = arr[v]
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_mode'] = result
      variables
    else
      result


  sort_a : (arr ) =>
    modifiedArray = arr.slice(0)
    sortAarray = modifiedArray.sort((a, b) -> a - b)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_sort_a'] = sortAarray
      variables
    else
      sortAarray


  sort_d : (arr ) =>
    modifiedArray = arr.slice(0)
    sortAarray = modifiedArray.sort((a, b) -> b - a)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_sort_d'] = sortAarray
      variables
    else
      sortAarray


  rank : (arr ) =>
    modifiedArray = arr.slice(0)
    sorted = modifiedArray.slice().sort((a, b) -> b - a)
    ranks = modifiedArray.slice().map((v) -> sorted.indexOf(v) + 1)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_rank'] = ranks
      variables
    else
      ranks

  prank : (arr ) =>
    sortedArray =    statistical.sort_a(arr, false)
    prankArray = (((num - .5) / sortedArray.length) for num in sortedArray )
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_prank'] = prankArray
      variables
    else
      prankArray


  cut : (arr, cuts ) =>
    modifiedArray = arr.slice(0)
    arrays = []
    while (modifiedArray.length > 0)
      arrays.push(modifiedArray.splice(0, cuts))
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_cut'] = arrays
      variables
    else
      arrays


  sum : (arr ) =>
    Sum = arr.reduce(((a, b)-> a + b ), 0)
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_sum'] = Sum
      variables
    else
      Sum

  diff : (arr ) =>
    initial = arr[0]
    modifiedArray = arr.slice(1)
    for num in modifiedArray
      initial = initial - num
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_diff'] = initial
      variables
    else
      initial

  prod : (arr ) =>
    initial = arr[0]
    modifiedArray = arr.slice(1)
    for num in modifiedArray
      initial = initial * num
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_prod'] = initial
      variables
    else
      initial

  quotient : (arr ) =>
    initial = arr[0]
    modifiedArray = arr.slice(1)
    for num in modifiedArray
      initial = initial / num
    if append
      varName =   arrayChecker(arr)
      varset[varName + '_quotient'] = initial
      variables
    else
      initial