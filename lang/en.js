exports.language = "en";
exports.strings = {
    "lang": "en",
    "title": {
        "netztest": "RTR - NetTest",
        "qostest": "QosTest"
    },
    "headline" : {
        "netztest" : "RTR-NetTest",
        "qostest" : "www.qostest.eu"
    },
    "index_content": {
        "service_description": {
            "netztest": "The RTR-NetTest informs users about the current service quality (including upload, download, ping, signal strength) of their Internet connection. In addition, a map view and statistics of previous tests can be accessed.",
            "qostest": "qostest.eu informs users about the current service quality (including upload, download, ping, signal strength) of their Internet connection. In addition, a map view and statistics of previous tests can be accessed."
        },
        "tos": {
            "text": "Privacy Policy and Terms of Use",
            "url": {
                "netztest": "https://www.netztest.at/redirect/en/terms",
                "qostest": "https://www.netztest.at/redirect/en/terms"
            }
        },
        "apps_content": 'Download <a href="https://itunes.apple.com/at/app/rtr-netztest/id724321403">iOS</a> or <a href="https://play.google.com/store/apps/details?id=at.alladin.rmbt.android">Android </a> App or conduct the <a href="https://www.rtr.at/en/tk/rtrnetztest_tests">browser test</a>.',
        "apps_url" : "https://www.rtr.at/en/tk/rtrnetztest_tests",
        "apps" : {
            "netztest" : "App and Browser Test",
            "qostest" : "NetTest Apps"
        },
        "apps_alt" : "RTR-NetTest app",
        "select_version" : "Select version",
        "test_section" : {
            "heading" : "Start RTR-NetTest",
            "alt" : {
                "netztest" : "RTR-NetTest teaser",
                "qostest" : "qostest teaser"
            },
            "source" : {
                "netztest" : "../img/rtr-netztest/rtr-netztest.png",
                "qostest" : "../img/qostest/qostest-start.png"
            },
            "start" : "Start"
        },
        "statistics_alt" : "Statistics teaser",
        "map": "Map view",
        "map_content" : "Map with test results",
        "help_content" : "Detailled background information",
        "statistics_content" : "Statistics on the test results",
        "enlarge_map" : "Enlarge map",
        "fullscreen" : "Full screen",
        "loop_mode_content": "Conduct repeated measurements",
        "opendata_content": "Explore open data test results",
        "certified_content": "Conduct certified measurements"
    },

    "map_content" : {
        "teaser" : {
            "netztest" : 'This map shows the existing RTR-NetTest results,  it is not always possible to draw conclusions on the broadband coverage. Additional information can be found  <a href="https://www.rtr.at/en/tk/netztestfaq_karte#c26190">here</a>.',
            "qostest" : 'This map shows the existing qostest.eu results, it is not always possible to draw conclusions on the broadband coverage. Additional information can be found <a href="https://www.rtr.at/en/tk/netztestfaq_karte#c26190">here</a>.'
        },
        "search_address" : "Search for an address or city",
        "large_view" : "Large view"
    },

    "statistics_content" : {
        "teaser" : {
            "netztest" : 'The values listed here represent the RTR-NetTest results.     Additional information can be found <a href="https://www.rtr.at/en/rtr/netztestfaq_testergebnis#c26545">here</a>.',
            "qostest" : 'The values listed here represent the qostest.eu results.     Additional information can be found <a href="https://www.rtr.at/en/rtr/netztestfaq_testergebnis#c26545">here</a>.'
        },
        "operators_from" : "Operators from",
        "disclaimer" : 'Repeated tests are filtered for the compilation of statistics.',
        "opendata_disclaimer" : 'Please note: <a href="Opendata.html">measurement data available</a> as open data',
        "burgenland" : 'Burgenland',
        "carinthia" : 'Carinthia',
        "lower_austria" : 'Lower Austria',
        "upper_austria" : 'Upper Austria',
        "salzburg" : 'Salzburg',
        "styria" : "Styria",
        "tyrol" : "Tyrol",
        "vorarlberg" : "Vorarlberg",
        "vienna" : "Vienna",
        "all_states" : "All provinces",
        "enddate" : "End date",
        "all_operators" : "All operators",
        "no_operators": "No operators found for the current selection",
        "failure": "Currently there are no statistics available."
    },

    "history_content" : {
        "request_code" : "Request synchronization code",
        "enter_code" : "or enter a known synchronization code in the input box below and confirm your entry by clicking on submit",
        "download": "Download",
        "csv": "CSV",
        "xlsx": "XLSX",
        "pdf": "PDF"
    },

    "opentest_content" : {
        "measurement_result_from" : "Measurement result from"
    },

    "opentests_content" : {
        "network_name" : "Mobile network (Display)",
        "mobile_provider_name" : "Mobile operator",
        "sim_home_country" : "SIM home country",
        "sim_mcc_mnc" : "SIM-MCC-MNC",
        "country_geoip" : "Country (IP)",
        "country_location" : "Country (Location)",
        "public_ip_as_name" : "Network name (AS)",
        "software_version" : "Software version",
        "next_page" : "Next page",
        "results" : "results",
        "network_country" : "Country",
        "gkz" : "Austrian community ID",
        "pinned_true" : "Included in statistics",
        "pinned_false" : "Not included in statistics",
        "show_open_test_uuid" : "Show Open-Test-UUID",
        'radio_band': 'Radio band',
        'cell_area_code': 'Cell area code',
        'cell_location_id': 'Cell location id',
        'channel_number': 'Frequency channel',
        "additional_filters" : "Further filters",
        "intraday": "Intraday",
        "down_upload": "Download/Upload"
    },

    "options_content" : {
        "client_uuid" : "Client-UUID",
        "options_apps_text" : "<h5>Android-App</h5><p>The RTR-NetTest measures, in addition to the speed of your current internet connection (upload, download, ping, signal strength), also a number of quality parameters (VoIP, unchanged content, website, transparent connection, DNS, ports).<br /> <br /> When starting the app, several symbols will give you information about your Internet connection: mobile data or WLAN connection, background data transmission, IP address and location. The start button initiates the RTR-NetTest. The speed tests are followed by QoS tests. QoS stands for Quality of Service. Horizontal bars show the progress of the QoS tests. Once all tests are completed, the results as well as other detailed information can be viewed in the summary. The menu is located on the left and contains buttons to access the pages home , history, map, statistics, help, information and settings.</p><p>The Android-App Version 2.2 can be downloaded using the&nbsp; <a href=\"https://play.google.com/store/apps/details?id=at.alladin.rmbt.android\" title=\"Download RTR-Netztest\" target=\"_blank\">Google Play Store</a> or direcly <a href=\"https://www.netztest.at/RTR-Netztest.apk\" title=\"Opens external link in new window\" target=\"_blank\">here</a>. It is available for devices with Android 4.0 and above. <a href=\"https://www.rtr.at/en/tk/netztestfaq_app\" title=\"Opens internal link in current window\">More information...</a></p><h5>iOS-App (iPhone, iPad)</h5><p>The iOS-App can be downloaded using the App <a href=\"https://itunes.apple.com/at/app/rtr-netztest/id724321403\" title=\"Download RTR-Netztest iOS\" target=\"_blank\">Apple iTunes-Store</a>. It is available for devices with iOS 7.0 and above. <a href=\"https://www.rtr.at/en/tk/netztestfaq_app\" title=\"Opens internal link in current window\">More information...</a></p><h5>Web-Browser</h5><p>Measurements with the RTR-NetTest with other mobile operating systems and with the desktop&nbsp;can be conducted with a web browser&nbsp; - <a href=\"https://www.netztest.at/en/Test?websocket=t\" title=\"Start RTR-Netztest using WebSockets\" target=\"_blank\">start test using Websockets</a></p><p><a href=\"https://www.rtr.at/en/tk/netztestfaq_web\" title=\"Opens internal link in current window\">More information on Web-Browsers.<br /></a></p>",
        "your_uuid" : "Your UUID is",
        "ip_version": "IP-Version",
        "ip_version_desc": "If your internet access supports both IPv4 and IPv6, you can choose which protocol version is used for conducting the test.",
        "ipvX_only": "IPv%X% only",
        "preferred_test_type" : "Preferred Test Type",
        "choose_server_desc" : "Please choose which server should be used for conducting the WebSocket-based test.",
        "config_saved" : "The configuration has been saved.",
        "run_ndt" : "I wish to run the optional NDT-Test.",
        "email_subject" : "RTR-NetTest%20support%20request",
        "email_address": "netztest@rtr.at",
        "fix_threads": "lock parallel threads"
    },

    "opendata_content" : {
        "open_data_specification" : "Open Data Interface Specification",
        "content_block" : 'In compliance with the RTR-NetTest privacy policy the measurement results of the RTR-NetTest are available as Open Data. The <a href="/en/OpenDataSpecification.html">specification is available as HTML</a> and <a hreF="https://github.com/rtr-nettest/open-rmbt/blob/master/RMBTStatisticServer/doc/swagger.json">Swagger</a>. This specification describes the information which is available as Open Data. It is available as JSON and as CSV-file (see below).',
        "csv_interface" : 'Download interface',
        "recent_tests_hours" : 'The results of the last 48 hours are available as zip-archive under <a href="/RMBTStatisticServer/export/netztest-opendata_hours-048.zip" title="RTR-Netztest Open Data 48h" target="_blank" class="external-link-new-window">netztest-opendata_hours-048.zip</a> and as xlsx under <a href="/RMBTStatisticServer/export/netztest-opendata_hours-048.xlsx" title="RTR-Netztest Open Data 48h" target="_blank" class="external-link-new-window">netztest-opendata_hours-048.xlsx</a>.',
        "recent_tests" : 'The results of the last 31 days are available as zip-archive under <a href="/RMBTStatisticServer/export/netztest-opendata.zip" title="RTR-Netztest Open Data" target="_blank" class="external-link-new-window">netztest-opendata.zip</a> and as xlsx under <a href="/RMBTStatisticServer/export/netztest-opendata.xlsx" title="RTR-Netztest Open Data" target="_blank" class="external-link-new-window">netztest-opendata.xlsx</a>.',
        "further_results" : "Further results are available on a monthly basis:",
        "note_timestamp" : "Please note that time stamps are in UTC (not in local time). To ensure the correctness of the results, implausible and/or obvious abusive measurements may be marked with the flag 'implausible' by RTR.",
        "license_text" : 'The data is published under the <a href="https://creativecommons.org/licenses/by/4.0/deed.de" target="_blank" class="external-link-new-window">Creative Commons Attribution 4.0 (CC BY 4.0)</a> license. Please also refer the additional <a rel="license" href="https://www.rtr.at/en/tk/netztest_use_opendata">licensing terms</a>.'
    },

    "loop_mode_content" : {
        "tests" : "Number of tests",
        "tests_sum" : "Number of tests in loop mode",
        "waiting_time" : "Waiting time",
        "waiting_time_desc" : "Waiting time (in minutes) between two tests in loop mode",
        "start": "Start loop mode",
        "measurements" : "Last measurements",
        "error_during_test" : "An error occurred during the measurement.",
        "current_test": "Current measurement",
        "save_results": "Save results",
        "download_results": "Download results:",
        "available_history": "Test results are available under menu item <em>History</em>."
    },
    "certified_measurement_content": {
        "info": "Info",
        "data": "Data",
        "environment": "Environment",
        "measurement": "Measurement",
        "result": "Result",
        "introduction_desc": "The certified measurement allows you to make statements about the quality of your wired Internet access. The results provide the basis for a so-called \"prima facie proof\" of certain legal value of your Internet access. The certified measurement only states facts. Whether a contract-compliant service is provided or not, is therefore always up to the deciding entity. This could be a court or the <a href=\"https://www.rtr.at/en/tk/TKKS_Schlichtung01\"> arbitration board </a> with RTR-GmbH.",
        "introduction_instruction": "Notes on the measurement",
        "introduction_instruction_desc": "Before you start the certified measurement, please read the <a href=\"https://www.rtr.at/en/inf/KonsultZertMessung2019/Anleitung_zur_zertifiziert_Messung.pdf\" target=\"_blank\" rel=\"noopener noreferrer\"> instructions for certified measurement </a> carefully. It also includes a checklist to assist you in performing the certified measurement. For more information, see the <a href=\"#\"> FAQ </a>.",
        "please_note": "Please note in particular",
        "note_fixed": "The certified measurement can only be used to verify wired Internet access services.",
        "note_browser": "Certified measurements can only be done via an internet browser (Chrome, Edge, Firefox etc.) on your computer.",
        "note_no_other_usage": "During a measurement cycle, do not use your computer for other applications.",
        "note_no_other_users": "Please make sure that you or other users in your household do not use the same internet connection during the measurement (eg. family members by smartphone).",
        "process": "Process of a certified measurement",
        "process_desc": "A measuring cycle lasts at least two hours. During this period, individual measurements are taken every 15 minutes. At least three measurement cycles must be performed on three different days within two weeks for a certified measurement.",
        "questions_desc": "For questions about the certified measurement, please contact us at <a href=\"mailto:netztest@rtr.at\"> netztest@rtr.at </a>.",
        "basic_information": "Basic information on the certified measurement",
        "title_prepended": "Title",
        "first_name": "First name",
        "last_name": "Last name",
        "title_appended": "Title",
        "location": "Location of the measurements",
        "location_desc": "The address at which the measurements are taken",
        "first_cycle_question": "Is it the first measurement cycle?",
        "yes_first_cycle": "Yes, first cycle",
        "no_subsequent_cycle": "No, follow-up cycle",
        "start_measurement": "Start certified measurement",
        "additional_information": "Further information on the measurement",
        "additional_information_desc": "Since this is the first measurement cycle, we ask you to answer the following questions in order to understand the circumstances of the measurement. For further measuring cycles, answering these questions is no longer necessary.",
        "location_access": "Please describe the location of your internet access",
        "location_access_residential": "Apartment building",
        "location_access_single_family": "Single-family home",
        "location_access_urban": "Urban area",
        "location_access_rural": "Rural area",
        "location_access_other": "Other",
        "access_type": "Please describe your internet access",
        "access_type_desc": "What kind of internet access (DSL, cable, radio, other) is it? Which modem or which router do you use? If possible, specify an exact type designation.",
        "test_device": "Please describe your device used for measuring",
        "test_device_desc": "Describe the computer that you are running the test with. How is this connected to the modem/router? Are your devices connected via cable (LAN) or wireless (WLAN)? Are the electrical wires in your house also used to transmit data (PowerLAN)? For WLAN: Are the test device and modem / router in the same room?",
        "photo_upload": "Photo upload",
        "photo_upload_desc": "Please send us a photo of the modem / router, the computer (if possible together on a picture) and photos of the individual type designations. If possible, please also send a photo of the wall socket",
        "conducting_measurements": "Conduction of the measurement",
        "measurements": "Measurement",
        "result_when_finished": "Your measurement result will be available for download after completion of all measurements",
        "planned_end": "Planned completion of the measurement: approx. %X%.",
        "generating_report": "Document is being created ...",
        "finished": "The measuring cycle is now complete.",
        "finished_desc": "Save the result of the measurement cycle immediately or print it out. The document will not be saved by RTR-GmbH.",
        "error_generating": "Error generating the document.",
        "generate_new": "Try again"
    },
    //Page titles and link descriptions
    "index": "Home",
    "statistics": "Statistics",
    "history": "History",
    "map": "Map view",
    "options": "Options",
    "opentest": "Open data measurement result",
    "opentests": "Open data measurement results",
    "opendata": "Open data",
    "help": "Help",
    "help_url": "https://www.rtr.at/en/tk/netztesthilfe",
    "imprint" : "Publishing information",
    "imprint_url" : "https://www.rtr.at/en/rtr/impressum",
    "menu" : "Menu",
    "loop_mode" : "Loop mode",
    "certified_measurement": "Certified measurement",

    //common words
    "top" : "Top",
    "print" : "Print",
    "time": "Time",
    "operator": "Operator",
    "device": "Device",
    "up": "Up",
    "down": "Down",
    "ping": "Ping",
    "signal": "Signal",
    'mbps': 'Mbps',
    'ms': 'ms',
    'dBm': 'dBm',
    'dB': 'dB',
    'X_recent_tests': "%X% recent tests",
    'recent_tests': "Recent tests",
    'more' : "more",
    'less' : "less",

    "automatic" : "Automatic",
    "heatmap" : "Heatmap",
    "points" : "Points",
    "shapes" : "Shapes",
    "communities" : "Cadastral communities",
    "sources" : "Sources",

    "please_select" : "Please select",
    "address_not_distinct" : "Address not distinct",
    "map_key" : "Map key",
    "search" : "Search",

    "further_tests" : "Further tests",
    "austria" : "Austria",

    "24_hours" : "24 hours",
    "1_day" : "1 day",
    "1_week" : "1 week",
    "1_month" : "1 month",
    "X_months" : "%X% months",
    "1_year" : "1 year",
    "X_years" : "%X% years",
    "days" : "Days",
    "months" : "Months",
    "years" : "Years",
    "type" : "Type",
    "mobile" : "Mobile",
    "wifi_test" : "WLAN (App)",
    "browser" : "Browser",
    "time_span" : "Time span",
    "technology" : "Technology",
    "mixed" : "Mixed",
    "quantile" : "Quantile",
    "X_m" : "%X% m",
    "X_km" : "%X% km",
    "quantity" : "Quantity",
    "location_accuracy" : "Location accuracy",
    "accuracy" : "Accuracy",
    "any" : "any",
    "name" : "Name",
    "all" : "All",
    "devices" : "Devices",
    'open_uuid': 'Open-User-UUID',
    "client_uuid" : "Client-UUID",
    "begin" : "begin",
    "end" : "end",
    "timespan" : "Timespan",
    "pinned" : "Pinned",
    "test_server" : "Testserver",
    "ip": "IP",
    "state": "Status",
    "api": "API",

    "access" : "Access",
    "date" : "Date",
    "synchronization_code" : "Synchronization code",
    "code" : "Code",
    "submit" : "Submit",

    "quality_of_service" : "Quality of Service",
    "details" : "Details",
    "detailed_results" : "Detailed results",
    "position" : "Position",
    "speed_curve" : "Speed curve",
    "download" : "Download",
    "upload" : "Upload",
    "speed" : "Speed",
    "data_volume" : "Data volume",
    "signal_strength" : "Signal strength",
    "connection_technology" : "Technology",
    "share" : "Share",
    "get_forum_banner" : "Get forum banner",
    "send_email" : "Send email",
    "open_data_entry" : "Open data entry",

    "measurement_result" : "Measurement result",
    "detailed_measurements" : "Detailed measurements",
    "measurements" : "Measurements",
	"measurement": "Measurement",
    "moreInfo" : "More Info",
	"net": "Net",

    "websocket" : "WebSocket",
    "java_applet" : "Java-Applet",
    "default_server" : "Default Server",
    "save" : "Save",

    "test_results" : "Test results",
    "advanced_search" : "Advanced search",
    "from" : "from",
    "up_to" : "up to",
    "zip_code" : "Zip code",
    "platform" : "Platform",
    "software_version" : "Software version",
    "asn" : "AS number",
    "apply_filters" : "Apply filters",
    "reset" : "Reset",
    "histogram" : "Histogram",

    "coordinates": "Coordinates",
    "provider" : "Provider",
    "surrounding_tests": "Show surrounding measurements as open data",
    "land_cover": "Land cover",
    "next": "Next"
}