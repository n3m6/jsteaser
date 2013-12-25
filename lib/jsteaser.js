'use strict';


function JsTeaser(article) {  
  this.title = article.title;
  this.text = article.text;

  this.stopWords = [
    '-', ' ', ',', '.', 'a', 'e', 'i', 'o', 'u', 't', 'about', 'above',
    'above', 'across', 'after', 'afterwards', 'again', 'against', 'all',
    'almost', 'alone', 'along', 'already', 'also', 'although', 'always',
    'am', 'among', 'amongst', 'amoungst', 'amount', 'an', 'and',
    'another', 'any', 'anyhow', 'anyone', 'anything', 'anyway',
    'anywhere', 'are', 'around', 'as', 'at', 'back', 'be', 'became',
    'because', 'become', 'becomes', 'becoming', 'been', 'before',
    'beforehand', 'behind', 'being', 'below', 'beside', 'besides',
    'between', 'beyond', 'both', 'bottom', 'but', 'by', 'call', 'can',
    'cannot', "can't", 'co', 'con', 'could', "couldn't", 'de',
    'describe', 'detail', 'did', 'do', 'done', 'down', 'due', 'during',
    'each', 'eg', 'eight', 'either', 'eleven', 'else', 'elsewhere',
    'empty', 'enough', 'etc', 'even', 'ever', 'every', 'everyone',
    'everything', 'everywhere', 'except', 'few', 'fifteen', 'fifty',
    'fill', 'find', 'fire', 'first', 'five', 'for', 'former',
    'formerly', 'forty', 'found', 'four', 'from', 'front', 'full',
    'further', 'get', 'give', 'go', 'got', 'had', 'has', 'hasnt',
    'have', 'he', 'hence', 'her', 'here', 'hereafter', 'hereby',
    'herein', 'hereupon', 'hers', 'herself', 'him', 'himself', 'his',
    'how', 'however', 'hundred', 'i', 'ie', 'if', 'in', 'inc', 'indeed',
    'into', 'is', 'it', 'its', "it's", 'itself', 'just', 'keep', 'last',
    'latter', 'latterly', 'least', 'less', 'like', 'ltd', 'made', 'make',
    'many', 'may', 'me', 'meanwhile', 'might', 'mill', 'mine', 'more',
    'moreover', 'most', 'mostly', 'move', 'much', 'must', 'my', 'myself',
    'name', 'namely', 'neither', 'never', 'nevertheless', 'new', 'next',
    'nine', 'no', 'nobody', 'none', 'noone', 'nor', 'not', 'nothing',
    'now', 'nowhere', 'of', 'off', 'often', 'on', 'once', 'one', 'only',
    'onto', 'or', 'other', 'others', 'otherwise', 'our', 'ours',
    'ourselves', 'out', 'over', 'own', 'part', 'people', 'per',
    'perhaps', 'please', 'put', 'rather', 're', 'said', 'same', 'see',
    'seem', 'seemed', 'seeming', 'seems', 'several', 'she', 'should',
    'show', 'side', 'since', 'sincere', 'six', 'sixty', 'so', 'some',
    'somehow', 'someone', 'something', 'sometime', 'sometimes',
    'somewhere', 'still', 'such', 'take', 'ten', 'than', 'that', 'the',
    'their', 'them', 'themselves', 'then', 'thence', 'there',
    'thereafter', 'thereby', 'therefore', 'therein', 'thereupon',
    'these', 'they', 'thickv', 'thin', 'third', 'this', 'those',
    'though', 'three', 'through', 'throughout', 'thru', 'thus', 'to',
    'together', 'too', 'top', 'toward', 'towards', 'twelve', 'twenty',
    'two', 'un', 'under', 'until', 'up', 'upon', 'us', 'use', 'very',
    'via', 'want', 'was', 'we', 'well', 'were', 'what', 'whatever',
    'when', 'whence', 'whenever', 'where', 'whereafter', 'whereas',
    'whereby', 'wherein', 'whereupon', 'wherever', 'whether', 'which',
    'while', 'whither', 'who', 'whoever', 'whole', 'whom', 'whose',
    'why', 'will', 'with', 'within', 'without', 'would', 'yet', 'you',
    'your', 'yours', 'yourself', 'yourselves', 'the', 'reuters', 'news',
    'monday', 'tuesday', 'wednesday', 'thursday', 'friday', 'saturday',
    'sunday', 'mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun',
    'rappler', 'rapplercom', 'inquirer', 'yahoo', 'home', 'sports',
    '1', '10', '2012', 'sa', 'says', 'tweet', 'pm', 'home', 'homepage',
    'sports', 'section', 'newsinfo', 'stories', 'story', 'photo',
    '2013', 'na', 'ng', 'ang', 'year', 'years', 'percent', 'ko', 'ako',
    'yung', 'yun', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'time',
    'january', 'february', 'march', 'april', 'may', 'june', 'july',
    'august', 'september', 'october', 'november', 'december',
    'philippine', 'government', 'police', 'manila'
  ];
}

JsTeaser.prototype.splitSentences = function () {
  //var sentences = this.text.split(/\.\s+|\?\s+|\!\s+/);
  var sentences = [];
  this.text.replace(/(.*?[.?!])(\s+|$)/g, function(all, sentence){ sentences.push(sentence); })
  return sentences;
};

JsTeaser.prototype.splitTitle = function() {
  return this.title.match(/\w+/gi);
};

JsTeaser.prototype.splitText = function () {
  return this.text.match(/\w+/gi);
};

function splitWords (sentence) {
  var words = sentence.match(/\w+/gi);
  words.forEach( function (element, index, array) {
    element = element.toLowerCase();
  });
  return words.map(function (element) {
    return element.toLowerCase();
  });
}

function wordFound(word, array) {
  var keys = array.map( function (thing) {
    return thing.key;
  });

  if (keys.indexOf(word) === -1) {
    return false;
  } else { 
    return true;
  }
}

function arrayCountTable(arr) {
  var rv = [];
  var wordKeys =[];
  var rvIndex;

  for (var i = 0; i < arr.length; i++) {
    if(!wordFound(arr[i].toLowerCase(), rv)){
      rv.push({
        key: arr[i].toLowerCase(),
        value: 0
      });
    } else { 
      rv.forEach( function (element, index, array) {
        if(element.key === arr[i].toLowerCase()){
          element.value++;
        }
      });
    } 
  }

  //return rv sorted;
  return rv.sort(function (val1, val2) {
    return val1.value < val2.value ? 1: val1.value > val2.value ? -1 : 0;
  });
}

JsTeaser.prototype.keywords = function () {
  var stopWords = this.stopWords;
  var numOfWords;
  var articleScore;
  
  // removing stopWords from list
  var wordList = this.splitText()
  numOfWords = wordList.length;
  var words = wordList.filter( function (el, stop) {
    return stopWords.indexOf(el) < 0;
  });
  
  // Building a count of all the elements
  var wordTable = arrayCountTable(words);
  var topTen    = wordTable.slice(0, 9);
  
  topTen.forEach( function (element, index, array) {
    articleScore = element.value*1.0/numOfWords;
    element.value = articleScore * 1.5 + 1;
  });

  return topTen.sort(function (val1, val2) {
    return val1.value < val2.value? 1: val1.value > val2.value? -1 : 0;
  });
};

function titleScore (titleUnfiltered, sentence, stopWords) {
  
  var titleUpper = titleUnfiltered.filter( function (el, stop) {
    return stopWords.indexOf(el) < 0;
  });

  var title = titleUpper.map(function (element) {
    return element.toLowerCase();
  });

  var count = 0.0;
  
  for (var s in sentence) {
    if(stopWords.indexOf(sentence[s]) === -1) {
      if(title.indexOf(sentence[s] > -1)) {
        count += 1;
      }
    }
  }

  return count/title.length;
}

function lengthScore(sentence) {
  var ideal = 20.0;
  return 1 - ((Math.abs(ideal - sentence.length)) / ideal)
}

function score(sentences, titleWords, keywords, stopWords) {

  var senSize = sentences.length;
  var rank = [];

  for(var s in sentences) {
    var sentence        = splitWords(sentences[s]);
    var titleFeature    = titleScore(titleWords, sentence, stopWords);
    var sentenceLength  = lengthScore(sentence);
    var sentencePos     = sentencePosition(s+1, senSize);
    var sbsFeature      = sbs(sentence, keywords);
    var dbsFeature      = dbs(sentence, keywords);
    var frequency       = (sbsFeature + dbsFeature) / 2.0 * 10.0;

    var totalScore      = (titleFeature * 1.5 +
                            frequency * 2.0 +
                            sentenceLength * 1.0 +
                            sentencePos * 1.0 ) /4.0;
    rank.push({
      key: sentences[s],
      value: totalScore
    });

  }
  return rank.sort(function (val1, val2) {
    return val1.value < val2.value ? 1: val1.value > val2.value ? -1 : 0;
  });
}

function sbs(words, keywords) {
  var score = 0.0;
  if (words.length === 0) {
    return 0;
  }
  for (var word in words) {
    for (var k in keywords) {
      if (keywords[k].key === words[word]) {
        score += keywords[k].value;
      }
    } 
  }
  return (1.0 / Math.abs(words.length * score) /10.0);
}

function dbs(words, keywords) {
  if (words.length === 0) {
    return 0;
  }

  var summ = 0;
  var first = [];
  var second = [];
  
  for ( var word in words) {
    for (var k in keywords) {
      var score  = keywords[k].value;
      if(first.length === 0) {
        first = [word, score]
      } else {
        second = first;
        first = [word, score]
        var dif = first[0] - second [0];
        var base = Math.pow(dif, 2)
        if ( base === 0) {
          base = 1;
        }
        summ += (first[1]*second[1]) / base;
      }
    }
  }
  var intersec = words.filter( function (value, index, array) {
    for( k in keywords ) {
      if( value === keywords[k].key) {
        return value;
      }
    }
  });

  var k =  intersec.length + 1;
  return (1/(k*(k+1.0))*summ);
}

function sentencePosition(i, size) {
  var normalized = i * 1.0 /size;

  if ( normalized > 0 && normalized <= 0.1) {
    return 0.17;
  } else if ( normalized > 0.1 && normalized <= 0.2) {
    return 0.23;
  } else if ( normalized > 0.2 && normalized <= 0.3) {
    return 0.14;
  } else if ( normalized > 0.3 && normalized <= 0.4) {
    return 0.08;
  } else if ( normalized > 0.4 && normalized <= 0.5) {
    return 0.05;
  } else if ( normalized > 0.5 && normalized <= 0.6) {
    return 0.04;
  } else if ( normalized > 0.6 && normalized <= 0.7) {
    return 0.06; 
  } else if ( normalized > 0.8 && normalized <= 0.8) {
    return 0.04;
  } else if ( normalized > 0.9 && normalized <= 1.0) {
    return 0.15;
  } else { 
    return 0;
  }
}



JsTeaser.prototype.summarize = function () {
  var sentences   = this.splitSentences();
  var keys        = this.keywords();
  var titleWords  = this.splitTitle();
  var stopWords   = this.stopWords;
  
  var ranks       = score(sentences, titleWords, keys, stopWords);
  var newRanks    = ranks.map(function (element) {
    return element.key;
  });
  return newRanks.slice(0,5);
};

module.exports = JsTeaser;

