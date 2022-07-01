let firstTracker = '' + 
'<div class="parent">' +  
'            <div class="div2 mt-5">' + 
'                <div class="input-group w-50">' + 
'                        <select class="custom-select" name="countriesList" id="countriesList">' + 
'                            <option value="AF">Afghanistan</option>' + 
'                            <option value="AL">Albania</option>' + 
'                            <option value="DZ">Algeria</option>' + 
'                            <option value="AD">Andorra</option>' + 
'                            <option value="AO">Angola</option>' + 
'                            <option value="AI">Anguilla</option>' + 
'                            <option value="AG">Antigua and Barbuda</option>' + 
'                            <option value="AR">Argentina</option>' + 
'                            <option value="AM">Armenia</option>' + 
'                            <option value="AW">Aruba</option>' + 
'                            <option value="AU">Australia</option>' + 
'                            <option value="AT">Austria</option>' + 
'                            <option value="AZ">Azerbaijan</option>' + 
'                            <option value="BS">Bahamas</option>' + 
'                            <option value="BH">Bahrain</option>' + 
'                            <option value="BD">Bangladesh</option>' + 
'                            <option value="BB">Barbados</option>' + 
'                            <option value="BY">Belarus</option>' + 
'                            <option value="BE">Belgium</option>' + 
'                            <option value="BZ">Belize</option>' + 
'                            <option value="BJ">Benin</option>' + 
'                            <option value="BM">Bermuda</option>' + 
'                            <option value="BT">Bhutan</option>' + 
'                            <option value="BO">Bolivia</option>' + 
'                            <option value="BQ">Bonaire, Sint Eustatius and Saba</option>' + 
'                            <option value="BA">Bosnia and Herzegovina</option>' + 
'                            <option value="BW">Botswana</option>' + 
'                            <option value="BR">Brazil</option>' + 
'                            <option value="BN">Brunei Darussalam</option>' + 
'                            <option value="BG">Bulgaria</option>' + 
'                            <option value="BF">Burkina Faso</option>' + 
'                            <option value="BI">Burundi</option>' + 
'                            <option value="KH">Cambodia</option>' + 
'                            <option value="CM">Cameroon</option>' + 
'                            <option value="CA">Canada</option>' + 
'                            <option value="CV">Cape Verde</option>' + 
'                            <option value="KY">Cayman Islands</option>' + 
'                            <option value="CF">Central African Republic</option>' + 
'                            <option value="TD">Chad</option>' + 
'                            <option value="CL">Chile</option>' + 
'                            <option value="CN">China</option>' + 
'                            <option value="CO">Colombia</option>' + 
'                            <option value="KM">Comoros</option>' + 
'                            <option value="CG">Congo</option>' + 
'                            <option value="CD">Congo, Democratic Republic of the Congo</option>' + 
'                            <option value="CK">Cook Islands</option>' + 
'                            <option value="CR">Costa Rica</option>' + 
'                            <option value="CI">Cote D\'Ivoire</option>' + 
'                            <option value="HR">Croatia</option>' + 
'                            <option value="CU">Cuba</option>' + 
'                            <option value="CW">Curacao</option>' + 
'                            <option value="CY">Cyprus</option>' + 
'                            <option value="CZ">Czech Republic</option>' + 
'                            <option value="DK">Denmark</option>' + 
'                            <option value="DJ">Djibouti</option>' + 
'                            <option value="DM">Dominica</option>' + 
'                            <option value="DO">Dominican Republic</option>' + 
'                            <option value="EC">Ecuador</option>' + 
'                            <option value="EG">Egypt</option>' + 
'                            <option value="SV">El Salvador</option>' + 
'                            <option value="GQ">Equatorial Guinea</option>' + 
'                            <option value="ER">Eritrea</option>' + 
'                            <option value="EE">Estonia</option>' + 
'                            <option value="ET">Ethiopia</option>' + 
'                            <option value="FK">Falkland Islands (Malvinas)</option>' + 
'                            <option value="FO">Faroe Islands</option>' + 
'                            <option value="FJ">Fiji</option>' + 
'                            <option value="FI">Finland</option>' + 
'                            <option value="FR">France</option>' + 
'                            <option value="GF">French Guiana</option>' + 
'                            <option value="PF">French Polynesia</option>' + 
'                            <option value="GA">Gabon</option>' + 
'                            <option value="GM">Gambia</option>' + 
'                            <option value="GE">Georgia</option>' + 
'                            <option value="DE">Germany</option>' + 
'                            <option value="GH">Ghana</option>' + 
'                            <option value="GI">Gibraltar</option>' + 
'                            <option value="GR">Greece</option>' + 
'                            <option value="GL">Greenland</option>' + 
'                            <option value="GD">Grenada</option>' + 
'                            <option value="GP">Guadeloupe</option>' + 
'                            <option value="GT">Guatemala</option>' + 
'                            <option value="GN">Guinea</option>' + 
'                            <option value="GW">Guinea-Bissau</option>' + 
'                            <option value="GY">Guyana</option>' + 
'                            <option value="HT">Haiti</option>' + 
'                            <option value="VA">Holy See (Vatican City State)</option>' + 
'                            <option value="HN">Honduras</option>' + 
'                            <option value="HK">Hong Kong</option>' + 
'                            <option value="HU">Hungary</option>' + 
'                            <option value="IS">Iceland</option>' + 
'                            <option value="IN">India</option>' + 
'                            <option value="ID">Indonesia</option>' + 
'                            <option value="IR">Iran, Islamic Republic of</option>' + 
'                            <option value="IQ">Iraq</option>' + 
'                            <option value="IE">Ireland</option>' + 
'                            <option value="IM">Isle of Man</option>' + 
'                            <option value="IL">Israel</option>' + 
'                            <option value="IT">Italy</option>' + 
'                            <option value="JM">Jamaica</option>' + 
'                            <option value="JP">Japan</option>' + 
'                            <option value="JE">Jersey</option>' + 
'                            <option value="JO">Jordan</option>' + 
'                            <option value="KZ">Kazakhstan</option>' + 
'                            <option value="KE">Kenya</option>' + 
'                            <option value="KI">Kiribati</option>' + 
'                            <option value="KP">Korea, Democratic People\'s Republic of</option>' + 
'                            <option value="KR">Korea, Republic of</option>' + 
'                            <option value="KW">Kuwait</option>' + 
'                            <option value="KG">Kyrgyzstan</option>' + 
'                            <option value="LA">Lao People\'s Democratic Republic</option>' + 
'                            <option value="LV">Latvia</option>' + 
'                            <option value="LB">Lebanon</option>' + 
'                            <option value="LS">Lesotho</option>' + 
'                            <option value="LR">Liberia</option>' + 
'                            <option value="LY">Libyan Arab Jamahiriya</option>' + 
'                            <option value="LI">Liechtenstein</option>' + 
'                            <option value="LT">Lithuania</option>' + 
'                            <option value="LU">Luxembourg</option>' + 
'                            <option value="MO">Macao</option>' + 
'                            <option value="MK">Macedonia, the Former Yugoslav Republic of</option>' + 
'                            <option value="MG">Madagascar</option>' + 
'                            <option value="MW">Malawi</option>' + 
'                            <option value="MY">Malaysia</option>' + 
'                            <option value="MV">Maldives</option>' + 
'                            <option value="ML">Mali</option>' + 
'                            <option value="MT">Malta</option>' + 
'                            <option value="MH">Marshall Islands</option>' + 
'                            <option value="MQ">Martinique</option>' + 
'                            <option value="MR">Mauritania</option>' + 
'                            <option value="MU">Mauritius</option>' + 
'                            <option value="YT">Mayotte</option>' + 
'                            <option value="MX">Mexico</option>' + 
'                            <option value="FM">Micronesia, Federated States of</option>' + 
'                            <option value="MD">Moldova, Republic of</option>' + 
'                            <option value="MC">Monaco</option>' + 
'                            <option value="MN">Mongolia</option>' + 
'                            <option value="ME">Montenegro</option>' + 
'                            <option value="MS">Montserrat</option>' + 
'                            <option value="MA">Morocco</option>' + 
'                            <option value="MZ">Mozambique</option>' + 
'                            <option value="MM">Myanmar</option>' + 
'                            <option value="NA">Namibia</option>' + 
'                            <option value="NR">Nauru</option>' + 
'                            <option value="NP">Nepal</option>' + 
'                            <option value="NL">Netherlands</option>' + 
'                            <option value="NC">New Caledonia</option>' + 
'                            <option value="NZ">New Zealand</option>' + 
'                            <option value="NI">Nicaragua</option>' + 
'                            <option value="NE">Niger</option>' + 
'                            <option value="NG">Nigeria</option>' + 
'                            <option value="NU">Niue</option>' + 
'                            <option value="NO">Norway</option>' + 
'                            <option value="OM">Oman</option>' + 
'                            <option value="PK">Pakistan</option>' + 
'                            <option value="PW">Palau</option>' + 
'                            <option value="PS">Palestinian Territory, Occupied</option>' + 
'                            <option value="PA">Panama</option>' + 
'                            <option value="PG">Papua New Guinea</option>' + 
'                            <option value="PY">Paraguay</option>' + 
'                            <option value="PE">Peru</option>' + 
'                            <option value="PH">Philippines</option>' + 
'                            <option value="PL">Poland</option>' + 
'                            <option value="PT">Portugal</option>' + 
'                            <option value="QA">Qatar</option>' + 
'                            <option value="RE">Reunion</option>' + 
'                            <option value="RO">Romania</option>' + 
'                            <option value="RU">Russian Federation</option>' + 
'                            <option value="RW">Rwanda</option>' + 
'                            <option value="BL">Saint Barthelemy</option>' + 
'                            <option value="SH">Saint Helena</option>' + 
'                            <option value="KN">Saint Kitts and Nevis</option>' + 
'                            <option value="LC">Saint Lucia</option>' + 
'                            <option value="MF">Saint Martin</option>' + 
'                            <option value="PM">Saint Pierre and Miquelon</option>' + 
'                            <option value="VC">Saint Vincent and the Grenadines</option>' + 
'                            <option value="WS">Samoa</option>' + 
'                            <option value="SM">San Marino</option>' + 
'                            <option value="ST">Sao Tome and Principe</option>' + 
'                            <option value="SA">Saudi Arabia</option>' + 
'                            <option value="SN">Senegal</option>' + 
'                            <option value="RS">Serbia</option>' + 
'                            <option value="SC">Seychelles</option>' + 
'                            <option value="SL">Sierra Leone</option>' + 
'                            <option value="SG">Singapore</option>' + 
'                            <option value="SX">Sint Maarten</option>' + 
'                            <option value="SK">Slovakia</option>' + 
'                            <option value="SI">Slovenia</option>' + 
'                            <option value="SB">Solomon Islands</option>' + 
'                            <option value="SO">Somalia</option>' + 
'                            <option value="ZA">South Africa</option>' + 
'                            <option value="SS">South Sudan</option>' + 
'                            <option value="ES">Spain</option>' + 
'                            <option value="LK">Sri Lanka</option>' + 
'                            <option value="SD">Sudan</option>' + 
'                            <option value="SR">Suriname</option>' + 
'                            <option value="SZ">Swaziland</option>' + 
'                            <option value="SE">Sweden</option>' + 
'                            <option value="CH">Switzerland</option>' + 
'                            <option value="SY">Syrian Arab Republic</option>' + 
'                            <option value="TW">Taiwan, Province of China</option>' + 
'                            <option value="TJ">Tajikistan</option>' + 
'                            <option value="TZ">Tanzania, United Republic of</option>' + 
'                            <option value="TH">Thailand</option>' + 
'                            <option value="TL">Timor-Leste</option>' + 
'                            <option value="TG">Togo</option>' + 
'                            <option value="TO">Tonga</option>' + 
'                            <option value="TT">Trinidad and Tobago</option>' + 
'                            <option value="TN">Tunisia</option>' + 
'                            <option value="TR">Turkey</option>' + 
'                            <option value="TC">Turks and Caicos Islands</option>' + 
'                            <option value="TV">Tuvalu</option>' + 
'                            <option value="UG">Uganda</option>' + 
'                            <option value="UA">Ukraine</option>' + 
'                            <option value="AE">United Arab Emirates</option>' + 
'                            <option value="GB">United Kingdom</option>' + 
'                            <option value="US">United States</option>' + 
'                            <option value="UY">Uruguay</option>' + 
'                            <option value="UZ">Uzbekistan</option>' + 
'                            <option value="VU">Vanuatu</option>' + 
'                            <option value="VE">Venezuela</option>' + 
'                            <option value="VN">Viet Nam</option>' + 
'                            <option value="VG">Virgin Islands, British</option>' + 
'                            <option value="WF">Wallis and Futuna</option>' + 
'                            <option value="EH">Western Sahara</option>' + 
'                            <option value="YE">Yemen</option>' + 
'                            <option value="ZM">Zambia</option>' + 
'                            <option value="ZW">Zimbabwe</option>' + 
'                        </select>' + 
'                    </div>' + 
'            </div>' + 
'            <div class="div3 item"><div class="title"><h3>Total Cases</h3></div><div class="data"></div></div>' + 
'            <div class="div4 item"><div class="title"><h3>Total Deaths</h3></div><div class="data"></div></div>' + 
'            <div class="div5 outside" id="chartDiv"></div>' + 
'            <div class="div6 item"><div class="title"><h3>Total Recovered</h3></div><div class="data"></div></div>' + 
'            <div class="div7 item"><div class="title"><h3>Total Active</h3></div><div class="data"></div></div>' + 
'            <div class="div8 item"><div class="title"><h3>New Cases</h3></div><div class="data"></div></div>' + 
'            <div class="div9 item"><div class="title"><h3>New Deaths</h3></div><div class="data"></div></div>' + 
'            <div class="div10 globalData outside">' + 
'                <div class="globalItem1 b row"><div class="col-2"><img src="media/icons/covid-defult.svg"></div><div class="title col-10"><h6>Total Confirmed</h6><div class="data"></div></div></div>' + 
'                <div class="globalItem2 b row"><div class="col-2"><img src="media/icons/covid-green.svg"></div><div class="title col-10"><h6>Total Recovered</h6><div class="data"></div></div></div>' + 
'                <div class="globalItem3 b row"><div class="col-2"><img src="media/icons/covid-red.svg"></div><div class="title col-10"><h6>Total Deaths</h6><div class="data"></div></div></div>' + 
'                <div class="globalItem4 b row"><div class="col-2"><img src="media/icons/covid-redark.svg"></div><div class="title col-10"><h6>New Deaths</h6><div class="data"></div></div></div>' + 
'                <div class="row"><div class="col-2"><img src="media/icons/telephone.svg"></div><div class="title col-10"><h6>Help Line No.</h6><div class="data">112</div></div></div>' + 
'            </div>' + 
'        </div>' + 
'';

let secondTracker = '' + 
'<div class="container">  ' + 
'                <div class="tableContainer">' + 
'                    <div class=\'titleTable mt-3\'>Ajax Data Table - Covid-19 Country Wise State</div>' + 
'                        <div class="input-group w-25  mt-3 ml-3"> ' + 
'                            <select class="custom-select" name="entries" id="entries">' + 
'                                <option value="10">10</option>' + 
'                                <option value="20">20</option>' + 
'                                <option value="30">30</option>' + 
'                                <option value="40">40</option>' + 
'                                <option value="50">50</option>' + 
'                                <option value="227">All</option>' +    
'                            </select>' +                                 
'                        </div>' + 
'                        <table id="dtOrderExample" class="table table-striped table-bordered table-sm ml-4 mt-3" cellspacing="0" width="100%">' + 
'                          <thead>' + 
'                            <tr>' + 
'                              <th class="th-sm">Flag' + 
'                              </th>' + 
'                              <th class="th-sm">Country' + 
'                              </th>' + 
'                              <th class="th-sm">Cases' + 
'                              </th>' + 
'                              <th class="th-sm">New Cases' + 
'                              </th>' + 
'                              <th class="th-sm">Deaths' + 
'                              </th>' + 
'                              <th class="th-sm">New Deaths' + 
'                              </th>' + 
'                              <th class="th-sm">Recovered' + 
'                              </th>' + 
'                              <th class="th-sm">Active' + 
'                              </th>' + 
'                              <th class="th-sm">Critical' + 
'                              </th>' + 
'                              <th class="th-sm">Tested' + 
'                              </th>' + 
'                            </tr>' + 
'                          </thead>' + 
'                          <tbody id="tableBody">' +
'                          </tbody>' +
'                        </table>' + 
'                </div>' + 
'            </div>' + 
'';