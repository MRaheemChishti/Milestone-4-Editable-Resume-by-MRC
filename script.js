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
var _this = this;
var form = document.getElementById("ResumeForm");
var resumeOutput = document.getElementById("resumeOutput");
var resumeProfilepicture = document.getElementById("resumeProfilepicture");
var resumename = document.getElementById("resumename");
var resumeemail = document.getElementById("resumeemail");
var resumephone = document.getElementById("resumephone");
var resumeaddress = document.getElementById("resumeaddress");
var resumeeducation = document.getElementById("resumeeducation");
var resumeWorkexperience = document.getElementById("resumeWorkexperience");
var resumecertification = document.getElementById("resumecertification");
var resumeskills = document.getElementById("resumeskills");
var editbutton = document.getElementById("editbutton");
form.addEventListener("submit", function (event) { return __awaiter(_this, void 0, void 0, function () {
    var name1, email, phone, address, education, work_experience, certification, skills, profilepicture, picturefile, photoBase64;
    var _a;
    return __generator(this, function (_b) {
        switch (_b.label) {
            case 0:
                event.preventDefault();
                name1 = document.getElementById("name").value;
                email = document.getElementById("email").value;
                phone = document.getElementById("phone").value;
                address = document.getElementById("address").value;
                education = document.getElementById("education").value;
                work_experience = document.getElementById("work_experience").value;
                certification = document.getElementById("certification").value;
                skills = document.getElementById("skills").value;
                profilepicture = document.getElementById("profilepicture");
                picturefile = profilepicture.files ? profilepicture.files[0] : null;
                photoBase64 = '';
                if (!picturefile) return [3 /*break*/, 2];
                return [4 /*yield*/, fileToBase64(picturefile)];
            case 1:
                photoBase64 = _b.sent();
                localStorage.setItem("Profilepicture", photoBase64);
                resumeProfilepicture.src = photoBase64;
                _b.label = 2;
            case 2:
                // Set resume details
                resumename.textContent = name1;
                resumeemail.textContent = "Email: ".concat(email);
                resumephone.textContent = "Phone: ".concat(phone);
                resumeaddress.textContent = "Address: ".concat(address);
                resumeeducation.textContent = education;
                resumeWorkexperience.textContent = work_experience;
                resumecertification.textContent = certification;
                resumeskills.textContent = skills;
                // Show resume output
                (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.add("hidden");
                resumeOutput.classList.remove("hidden");
                return [2 /*return*/];
        }
    });
}); });
// Function to convert file to base64
function fileToBase64(file) {
    return new Promise(function (resolve, reject) {
        var reader = new FileReader();
        reader.onloadend = function () { return resolve(reader.result); };
        reader.onerror = reject;
        reader.readAsDataURL(file);
    });
}
// Add edit button function
editbutton.addEventListener("click", function () {
    var _a;
    updateform();
    (_a = document.querySelector(".container")) === null || _a === void 0 ? void 0 : _a.classList.remove("hidden");
    resumeOutput.classList.add("hidden");
});
function updateform() {
    var _a, _b, _c;
    document.getElementById("name").value = resumename.textContent || '';
    document.getElementById("email").value = ((_a = resumeemail.textContent) === null || _a === void 0 ? void 0 : _a.replace('Email: ', '')) || '';
    document.getElementById("phone").value = ((_b = resumephone.textContent) === null || _b === void 0 ? void 0 : _b.replace('Phone: ', '')) || '';
    document.getElementById("address").value = ((_c = resumeaddress.textContent) === null || _c === void 0 ? void 0 : _c.replace('Address: ', '')) || '';
    document.getElementById("education").value = resumeeducation.textContent || '';
    document.getElementById("work_experience").value = resumeWorkexperience.textContent || '';
    document.getElementById("certification").value = resumecertification.textContent || '';
    document.getElementById("skills").value = resumeskills.textContent || '';
}
;
