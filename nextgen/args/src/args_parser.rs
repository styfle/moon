use pest::{
    error::Error,
    iterators::{Pair, Pairs},
    Parser,
};
use pest_derive::Parser;
use std::borrow::Cow;

#[derive(Parser)]
#[grammar = "args.pest"]
struct ArgsParser;

#[derive(Debug, PartialEq)]
pub enum AstNode<'l> {
    Command {
        name: Cow<'l, str>,
    },

    // Args
    FlagArg {
        name: Cow<'l, str>,
    },
    OptionArg {
        name: Cow<'l, str>,
        value: Cow<'l, str>,
    },
    PositionalArg {
        value: Cow<'l, str>,
    },
}

fn parse_ast_node(pair: Pair<Rule>) -> Result<Option<AstNode>, Box<Error<Rule>>> {
    Ok(match pair.as_rule() {
        // Command
        Rule::command => Some(AstNode::Command {
            name: Cow::Borrowed(pair.as_str()),
        }),
        Rule::WHITESPACE | Rule::EOI => None,
        _ => None,
    })
}

fn parse_ast(pairs: Pairs<'_, Rule>) -> Result<Vec<AstNode<'_>>, Box<Error<Rule>>> {
    let mut ast = vec![];

    for pair in pairs {
        if let Some(node) = parse_ast_node(pair)? {
            ast.push(node);
        }
    }

    Ok(ast)
}

pub fn parse_args_list(input: &str) -> Result<Vec<AstNode<'_>>, Box<Error<Rule>>> {
    parse_ast(ArgsParser::parse(Rule::entry_args, input)?)
}

pub fn parse_command_line(input: &str) -> Result<Vec<AstNode<'_>>, Box<Error<Rule>>> {
    parse_ast(ArgsParser::parse(Rule::entry_cli, input)?)
}
