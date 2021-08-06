_configure() {
  [[ $# == 0 ]] && ${EDITOR} $CONFIG && return 0

  local key=$1; local value="$2"; valid_configs=${VALID_CONFIGS[@]}
  [[ ! ${key} =~ ^(${valid_configs// /|})$ ]] \
  && echo "Not a valid key for configuration, use <${valid_configs[@]// /|}> instead." \
  && return 1

  case $key in
    user)
      while [[ ! $value =~ ^[[:alnum:]]+$ ]]; do
        [[ -n $value ]] && echo "Invalid username"
        read -r -p "Github username: " value </dev/tty
      done ;;
    token)
      [[ -n $value && ${#value} -ne 40 && ! $value =~ ^(\$|\`) ]] && echo 'Invalid token format, it is not 40 chars' >&2 && return 1 ;;
    action)
      value="'$2'"
  esac

  echo false

  echo $key="$value" >>$CONFIG
}