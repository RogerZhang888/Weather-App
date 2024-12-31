var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
var elementLocation = document.getElementById("display-location");
var elementTemperature = document.getElementById("display-temperature");
var elementCondition = document.getElementById("display-condition");
var elementFeelsLike = document.getElementById("display-feels-like");
function getLocation() {
    var searchResult = document.getElementById("enter-location");
    if (searchResult.value !== null) {
        return searchResult.value;
    }
    else {
        window.alert("Please enter a location!");
        return null;
    }
    ;
}
function getWeather() {
    return __awaiter(this, void 0, void 0, function () {
        var desiredLocation, apiKey, apiUrl, response, data, fetchedLocation, fetchedTemperature, fetchedCondition, fetchedFeelsLike, error_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    desiredLocation = getLocation();
                    if (!desiredLocation)
                        return [2 /*return*/, null];
                    apiKey = "50e34b0e6815453e81892229243112";
                    apiUrl = "https://api.weatherapi.com/v1/current.json?key=".concat(apiKey, "&q=").concat(desiredLocation);
                    _a.label = 1;
                case 1:
                    _a.trys.push([1, 4, , 5]);
                    return [4 /*yield*/, fetch(apiUrl)];
                case 2:
                    response = _a.sent();
                    return [4 /*yield*/, response.json()];
                case 3:
                    data = _a.sent();
                    fetchedLocation = data.location.name;
                    fetchedTemperature = Math.round(data.current.temp_c);
                    fetchedCondition = data.current.condition.text;
                    fetchedFeelsLike = Math.round(data.current.feelslike_c);
                    elementLocation.innerHTML = fetchedLocation;
                    elementTemperature.innerHTML = "".concat(fetchedTemperature.toString(), "\u00B0");
                    elementCondition.innerHTML = fetchedCondition;
                    elementFeelsLike.innerHTML = "Feels like ".concat(fetchedFeelsLike.toString(), "\u00B0");
                    return [3 /*break*/, 5];
                case 4:
                    error_1 = _a.sent();
                    console.error("Error fetching weather data:", error_1);
                    window.alert("Unable to fetch weather data. Please try again.");
                    return [3 /*break*/, 5];
                case 5: return [2 /*return*/];
            }
        });
    });
}
var searchButton = document.getElementById("search-button");
searchButton === null || searchButton === void 0 ? void 0 : searchButton.addEventListener("click", function (event) {
    getWeather();
});
