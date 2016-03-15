<?php

function boson_breadcrumb($variables) {

   $breadcrumb = $variables['breadcrumb'];
  if (!empty($breadcrumb)) {

    $output = '<h2 class="element-invisible">' . 'Du er her' . '</h2>';

	$breadcrumb[] = drupal_get_title();
    $output .= '<ul class="crumbs"><li>Du er her:</li> '  . implode('  >  ', $breadcrumb) . '</ul>';
    return $output;
  }
}


function boson_preprocess_html(&$vars) {
	
  $bgklasa = theme_get_setting('theme_bg_pattern');
  $vars['classes_array'][] = drupal_html_class($bgklasa);
	
	drupal_add_js('https://cdnjs.cloudflare.com/ajax/libs/moment.js/2.10.6/moment.min.js', 'external');
	drupal_add_css(path_to_theme() . '/css/styles.css');
	
  
  // The Color Palette.
  $file = theme_get_setting('theme_color_palette');
  drupal_add_css(path_to_theme() . '/css/color-scheme/' . $file . '.css');
}

/**
 * Implements hook_form_alter().
 */
function boson_form_alter(&$form, &$form_state, $form_id) {  
  if ($form_id == 'webform_client_form_2') {    
    $form['submitted']['full_name']['#attributes']['placeholder'] = 'Navn (obligatorisk)';
    $form['submitted']['full_name']['#prefix'] = '<div class="webform-icon-container"><i class="webform-icon icon-user"></i>';
    $form['submitted']['full_name']['#suffix'] = '</div>';

    $form['submitted']['e_mail']['#attributes']['placeholder'] = 'E-mail (obligatorisk)';
    $form['submitted']['e_mail']['#prefix'] = '<div class="webform-icon-container"><i class="webform-icon icon-envelope"></i>';
    $form['submitted']['e_mail']['#suffix'] = '</div>';

    $form['submitted']['message']['#attributes']['placeholder'] = 'Skriv din besked til os her ...';
    $form['submitted']['message']['#prefix'] = '<div class="webform-icon-container"><i class="webform-icon icon-pencil"></i>';
    $form['submitted']['message']['#suffix'] = '</div>';
  }
}


