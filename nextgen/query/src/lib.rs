mod query_builder;
mod query_error;
mod query_parser;

pub use query_builder::*;
pub use query_error::QueryError;
pub use query_parser::*;

pub trait Queryable {
    fn matches_criteria(&self, criteria: &Criteria) -> miette::Result<bool>;
}
