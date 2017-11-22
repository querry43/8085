// Generated from ../libs/grammar/asm8085.g4 by ANTLR 4.5.3
// jshint ignore: start
var antlr4 = require('antlr4/index');

// This class defines a complete listener for a parse tree produced by asm8085Parser.
function asm8085Listener() {
	antlr4.tree.ParseTreeListener.call(this);
	return this;
}

asm8085Listener.prototype = Object.create(antlr4.tree.ParseTreeListener.prototype);
asm8085Listener.prototype.constructor = asm8085Listener;

// Enter a parse tree produced by asm8085Parser#prog.
asm8085Listener.prototype.enterProg = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#prog.
asm8085Listener.prototype.exitProg = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#line.
asm8085Listener.prototype.enterLine = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#line.
asm8085Listener.prototype.exitLine = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#operation.
asm8085Listener.prototype.enterOperation = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#operation.
asm8085Listener.prototype.exitOperation = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#label.
asm8085Listener.prototype.enterLabel = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#label.
asm8085Listener.prototype.exitLabel = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#comment.
asm8085Listener.prototype.enterComment = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#comment.
asm8085Listener.prototype.exitComment = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#instruction.
asm8085Listener.prototype.enterInstruction = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#instruction.
asm8085Listener.prototype.exitInstruction = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#DB.
asm8085Listener.prototype.enterDB = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#DB.
asm8085Listener.prototype.exitDB = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#DS.
asm8085Listener.prototype.enterDS = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#DS.
asm8085Listener.prototype.exitDS = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#ORG.
asm8085Listener.prototype.enterORG = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#ORG.
asm8085Listener.prototype.exitORG = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#SET.
asm8085Listener.prototype.enterSET = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#SET.
asm8085Listener.prototype.exitSET = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#register.
asm8085Listener.prototype.enterRegister = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#register.
asm8085Listener.prototype.exitRegister = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#labeloperand.
asm8085Listener.prototype.enterLabeloperand = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#labeloperand.
asm8085Listener.prototype.exitLabeloperand = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#locationcounteroperand.
asm8085Listener.prototype.enterLocationcounteroperand = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#locationcounteroperand.
asm8085Listener.prototype.exitLocationcounteroperand = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#expressionlist.
asm8085Listener.prototype.enterExpressionlist = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#expressionlist.
asm8085Listener.prototype.exitExpressionlist = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#Plus.
asm8085Listener.prototype.enterPlus = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#Plus.
asm8085Listener.prototype.exitPlus = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#Minus.
asm8085Listener.prototype.enterMinus = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#Minus.
asm8085Listener.prototype.exitMinus = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#MultExpression.
asm8085Listener.prototype.enterMultExpression = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#MultExpression.
asm8085Listener.prototype.exitMultExpression = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#Mult.
asm8085Listener.prototype.enterMult = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#Mult.
asm8085Listener.prototype.exitMult = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#Div.
asm8085Listener.prototype.enterDiv = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#Div.
asm8085Listener.prototype.exitDiv = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#Mod.
asm8085Listener.prototype.enterMod = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#Mod.
asm8085Listener.prototype.exitMod = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#ParenExpression.
asm8085Listener.prototype.enterParenExpression = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#ParenExpression.
asm8085Listener.prototype.exitParenExpression = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#parenexpression.
asm8085Listener.prototype.enterParenexpression = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#parenexpression.
asm8085Listener.prototype.exitParenexpression = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#immediate.
asm8085Listener.prototype.enterImmediate = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#immediate.
asm8085Listener.prototype.exitImmediate = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#hex.
asm8085Listener.prototype.enterHex = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#hex.
asm8085Listener.prototype.exitHex = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#oct.
asm8085Listener.prototype.enterOct = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#oct.
asm8085Listener.prototype.exitOct = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#bin.
asm8085Listener.prototype.enterBin = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#bin.
asm8085Listener.prototype.exitBin = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#dec.
asm8085Listener.prototype.enterDec = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#dec.
asm8085Listener.prototype.exitDec = function(ctx) {
};


// Enter a parse tree produced by asm8085Parser#str.
asm8085Listener.prototype.enterStr = function(ctx) {
};

// Exit a parse tree produced by asm8085Parser#str.
asm8085Listener.prototype.exitStr = function(ctx) {
};



exports.asm8085Listener = asm8085Listener;