use moon_error::MoonError;
use moon_logger::trace;
use serde::de::DeserializeOwned;
use serde::Serialize;
use starbase_styles::color;
use starbase_utils::{fs, json};
use std::path::PathBuf;

pub struct Runfile {
    pub path: PathBuf,
}

impl Runfile {
    pub fn load<T: DeserializeOwned + Serialize>(
        path: PathBuf,
        data: &T,
    ) -> Result<Runfile, MoonError> {
        trace!(target: "moon:cache:runfile", "Writing runfile {}", color::path(&path));

        fs::create_dir_all(path.parent().unwrap())?;

        // Always write a runfile, regardless of MOON_CACHE,
        // since consumers expect this to exist at runtime
        json::write_file(&path, data, true)?;

        Ok(Runfile { path })
    }
}