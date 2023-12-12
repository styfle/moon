use moon_args::parse_command_line;

mod args_parser {
    use super::*;

    #[test]
    fn command_name() {
        assert!(parse_command_line("cmd").is_ok());
        assert!(parse_command_line("cmd-dash").is_ok());
        assert!(parse_command_line("cmd_under").is_ok());
        assert!(parse_command_line("cmdCamelCase").is_ok());

        // Extensions
        assert!(parse_command_line("cmd.sh").is_ok());
        assert!(parse_command_line("cmd.exe").is_ok());

        // Paths
        assert!(parse_command_line("./cmd").is_ok());
        assert!(parse_command_line("../../cmd").is_ok());
        assert!(parse_command_line("~/cmd").is_ok());
        assert!(parse_command_line("~/cmd.exe").is_ok());
        assert!(parse_command_line(".\\cmd").is_ok());
        assert!(parse_command_line("..\\..\\cmd").is_ok());
        assert!(parse_command_line("~\\cmd").is_ok());
        assert!(parse_command_line("~\\cmd.exe").is_ok());
    }
}
