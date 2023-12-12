mod args_parser;

use args_parser::parse_command_line;

fn main() {
    dbg!(parse_command_line(
        "cmd.exe" // "cmd -f -bC --opt --opt=123 --opt= 123 --opt =123 --opt = 123"
    ));
}
