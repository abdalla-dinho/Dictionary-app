
import * as modal from "./modal.js";
import BookmarkView from "./view/bookmarkView.js";
import quizView from "./view/quizView.js";
import resultView from "./view/resultView.js";
import searchView from "./view/searchView.js";

import SearchView from "./view/searchView.js";
import WordView from "./view/wordView.js";






const SeachController = async function () {
    resultView.renderSpinner();
    try {
        const query = SearchView.getQuery();
        
        if (!query) return;

        await modal.loadSearch(query);
   
    
        resultView.render(modal.state.result);

        
       


        // console.log(query)
    } catch (err) {
        resultView.renderError();
        
   }
}

const WordController = async function () {
    try {

        await modal.loadWordOftheDay();
        const word = WordView.getTheWord();

      
     
        WordView.render(modal.state.wordOftheDay[word]);
    }
        
    catch (err) {
        console.error(err)
    }
};


const soundController = function () {
    const word = WordView.getTheWord();
    if (modal.state.result.word) modal.speakWord(modal.state.result.word)
    else {modal.speakWord(modal.state.wordOftheDay[word].word)}
}


const quizController = function (index) {


        modal.loadQuizQuest();
  

    if (index === modal.state.quiz.length) {
        quizView.displayResult()
    } else {
          quizView.render(modal.state.quiz[index]);
    }
        
 
}



const bookmarkController = async function () {
    try {

        if (!modal.state.result.bookmarked) modal.addBookmark(modal.state.result);
        else modal.deleteBookmark(modal.state.result);

    
     
       
        if (modal.state.bookmarks.length > 0) {
          BookmarkView.render(modal.state.bookmarks);
        } else {
            BookmarkView.renderMessage();
        }
        resultView.render(modal.state.result);

        
    }
    catch (err) {
        
    }
}


const bookmarkResultConroller = async function  (word) {
    try {
        await modal.loadSearch(word);

        resultView.render(modal.state.result);

    } catch (err) {
        console.error(err)
}
}




quizController(0);

searchView.addHandlerMobile(SeachController);
SearchView.addHandler(SeachController);
resultView.addHandler(soundController);
quizView.addHandler(quizController);
quizView.addHandlerRestar(quizController)
WordView.addHandler();
resultView.addHandlerBookmark(bookmarkController);
BookmarkView.addHandler(bookmarkResultConroller);

WordController();
