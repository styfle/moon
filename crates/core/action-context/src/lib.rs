use clap::ValueEnum;
use moon_target::Target;
use rustc_hash::{FxHashMap, FxHashSet};
use serde::{Deserialize, Serialize};
use std::path::PathBuf;

#[derive(ValueEnum, Clone, Debug, Deserialize, Serialize)]
pub enum ProfileType {
    Cpu,
    Heap,
}

#[derive(Clone, Debug, Default, Deserialize, Serialize)]
#[serde(rename_all = "camelCase")]
pub struct ActionContext {
    pub affected_only: bool,

    pub initial_targets: FxHashSet<String>,

    pub interactive: bool,

    pub passthrough_args: Vec<String>,

    pub primary_targets: FxHashSet<Target>,

    pub profile: Option<ProfileType>,

    pub target_hashes: FxHashMap<Target, String>,

    pub touched_files: FxHashSet<PathBuf>,

    pub workspace_root: PathBuf,
}

impl ActionContext {
    pub fn should_inherit_args<T: AsRef<Target>>(&self, target: T) -> bool {
        if self.passthrough_args.is_empty() {
            return false;
        }

        let target = target.as_ref();

        // project:task == project:task
        if self.primary_targets.contains(target) {
            return true;
        }

        // :task == project:task
        for initial_target in &self.initial_targets {
            if target.is_all_task(initial_target) {
                return true;
            }
        }

        false
    }
}