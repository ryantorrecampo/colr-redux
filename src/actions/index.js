import axios from "axios";

export function loadColor() {
    return dispatch => {
        return axios
            .get("http://www.colr.org/json/color/random")
            .then(reponse => {
                dispatch(changeColor("#" + reponse.data.new_color));
            });
    };
}

export function changeColor(color) {
    return {
        type: "CHANGE_COLOR",
        color: color
    };
}
