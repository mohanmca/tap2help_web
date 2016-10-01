import $ from 'jQuery'
import * as Backendless from 'Backendless'
import * as userService from './userService'
import * as dataService from './dataService'
import * as model from './dataService'
import {guid} from './util'
import {Assesment, AssesmentAttribute} from './model'

export function showAttributes(elem) {
    if (elem.value == 2) {
        document.getElementById('shelterTemplateAttribute').style.display = "block";
    } else {
        document.getElementById('anAttribute').style.display = "block";
    }
}

export function addAttribute(elem) {
    $(elem).parent().parent().clone().appendTo("#attributes");
    return false;
}

export function saveAssesment() {
    var $inputs = $('#mgmtForm :input');
    var disasterId = $inputs[0].selectedOptions[0].value
    var isAssesment = $("#item").val()
    var needs = $("select[id*='needs']").map((i, e) => e.value.trim())
    var needDescriptions = $("input[id*='needValue']").map((i, e) => e.value)
    var required = {}
    needDescriptions.map((i, description) => required[needs[i]] = description)
    var item = {
        "attributeType": isAssesment,
        "required": required
    }
    var assesment = parseAssesment(item)
    assesment['disaster'] = disasterId
    console.log(JSON.stringify(assesment, 2, null))
    dataService.saveAssesment(assesment)
}

export function parseAssesment(items) {
    var attributes = Object.keys(items.required).map(attributeId => new AssesmentAttribute(attributeId, items.required[attributeId]))
    var assesment = new Assesment(guid(), "assesmentName", "userId", attributes)
    return assesment
}
