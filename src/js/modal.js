import { grammarQuiz, wordsWithMeanings } from "./data.js";





export const state = {
  result: {},
  wordOftheDay: {},
  quiz: {},
  index: 0,
  bookmarks:[],
  
  
};

export function speakWord(word) {
  const synth = window.speechSynthesis;
  const utterance = new SpeechSynthesisUtterance(word);
  utterance.lang = "en-US";
  synth.speak(utterance);
};



export const loadSearch = async function (query) {
    try {
        const resp = await fetch(
          `https://api.dictionaryapi.dev/api/v2/entries/en/${query}`
        );
      const data = await resp.json();

    

  
      

 
        const DictionaryData = {
          word: data[0].word,
            definations: data[0].meanings[0].definitions,
          partOfSpeech: data[0].meanings[0].partOfSpeech,
          phonetic: data[0].phonetic,
          
      };
           
      
      
      if (state.bookmarks.some(bookmark => bookmark.id === query)) DictionaryData.bookmarked = true;
      else DictionaryData.bookmarked = false;
      state.result = DictionaryData; 

   
      
      

      
  
        
    }
    
    catch (err) {
        throw(err)
    }


  }
  

export const loadWordOftheDay = async function () {
  try {
    
    state.wordOftheDay = wordsWithMeanings;



    
   
    
   }
  catch (err) {
   console.error(err)
 }
}

export const loadQuizQuest = async function (index) {
  try {
 
    state.index = index;
    state.quiz = grammarQuiz;

  } catch (err) {
    console.error(err)
 }
}

export const addBookmark = async function (data) {
  try {
    state.bookmarks.push(data);

    if (state.bookmarks.some(book => book.word === data.word)) data.bookmarked = true;

   
 
  } catch (err) {
    console.error(err);
  }
};

export const deleteBookmark = function (id) {
  // Delete bookmark
  const index = state.bookmarks.findIndex(el => el.word);

  state.bookmarks.splice(index, 1);

  if (id === state.result) state.result.bookmarked = false;
};

// export const deleteBookmark = function (id) {
//   // Delete bookmark
//   const index = state.bookmarks.findIndex(el => el.id === id);
//   state.bookmarks.splice(index, 1);

//   // Mark current recipe as NOT bookmarked
//   if (id === state.recipe.id) state.recipe.bookmarked = false;

//   persistBookmarks();
// };