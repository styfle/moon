use crate::helpers::AnyError;
use moon_error::MoonError;
use moon_logger::{color, debug};
use moon_utils::fs;
use moon_workspace::Workspace;

const LOG_TARGET: &str = "moon:query:hash";

pub async fn query_hash(workspace: &Workspace, hash: &str) -> Result<(String, String), AnyError> {
    debug!(
        target: LOG_TARGET,
        "Querying for hash manifest with {}",
        color::hash(hash)
    );

    for file in fs::read_dir(&workspace.cache.hashes_dir)? {
        let path = file.path();
        let name = fs::file_name(&path).replace(".json", "");

        if hash == name || name.starts_with(hash) {
            debug!(
                target: LOG_TARGET,
                "Found hash manifest {} for {}",
                color::id(&name),
                color::hash(hash)
            );

            return Ok((name, fs::read(path)?));
        }
    }

    Err(MoonError::Generic(format!(
        "Unable to find a hash manifest for {}!",
        color::hash(hash)
    ))
    .into())
}