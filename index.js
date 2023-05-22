function shout(string) {
     // todo
}
function shout(string) {
    return string;
  }
  function shout(string) {
    return string.toUpperCase();
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function whisper(string) {
     //todo
  }
  function whisper(string) {
    return string
  }
  function whisper(string) {
    return string.toLowerCase();
  }
  function logShout (string) {
     console.log(string.toUpperCase( ))
  }
  function logWhisper (string) {
     console.log(string.toLowerCase( ))
       }
    //    function sayHiToHeadphonedRoomate (string) {
    //      var canUnswer = "I can't hear you!";
    //      var yesUnswer = "YES INDEED!";
    //      varlovUnswer = "I would love to!";
    //       return cantUnswer;
    //    }
    //        if (string.toUpperCase(string) === string) {
    //         yesUnswer;
    //    }
    //        else if (I , Roomate === string) {
    //          lovUnswer
    //        }
        // describe('sayHiToHeadphonedRoomate(string)', function() {
//   it('returns "I can\'t hear you!" if `string` is lowercase', function() {
//     expect(sayHiToHeadphonedRoomate('hello')).toEqual("I can't hear you!")
//   })
//   it('returns "YES INDEED!" if `string` is uppercase', function() {
//     expect(sayHiToHeadphonedRoomate('HELLO')).toEqual("YES INDEED!")
//   })

//   it('returns "I would love to!" if `string` is "Let's have dinner together."`', function() {
//     expect(sayHiToHeadphonedRoomate("I would love to, Roomate.")).toEqual("Let's have dinner together.")
//   })
// })
function sayHiToHeadphonedRoommate (string) {
    var cantUnswer = "I can't hear you!";
    var yesUnswer = "YES INDEED!";
    var lovUnswer = "I would love to!";
    if (string.toLowerCase(string) === string) {
      return cantUnswer;
    }
    else if (string.toUpperCase(string) === string) {
      return yesUnswer;
    }
    else if ("Let's have dinner together!" === string) {
      return lovUnswer
    }
  }
