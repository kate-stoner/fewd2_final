# How to use heightAdjust jQuery Plugin
	1.	Install jQuery. This example uses a CDN install before the closing body tag.
	2.	Target a wrapping div.
	3.	Target element within wrapping div for plugin to calculate min-height. 
	4.	Add CSS styling you'd like to add.

## The Code
Here's an example code snippet broken down by markup, the jQuery CDN install, and the jQuery plugin code. A full code example is included at the bottom.
### The Markup
```	
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1.0">
	<title>Height Adjust</title>
</head>
<body>
	<header>
		<h1>
			Lorem ipsum dolor.
		</h1>
	</header>
	<section>
		<section>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quia numquam iure impedit modi dolores ex. Facere molestias,
				eum perferendis.
			</p>
		</section>
		<section id="stories-1">
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium,
					impedit doloribus in laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in laudantium consequatur numquam
					porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit.
					Quasi accusantium, impedit doloribus in laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in
					laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
					error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in laudantium consequatur numquam porro laboriosam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium,
					impedit doloribus in laudantium consequatur numquam porro laboriosam.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vitae consectetur, similique unde voluptatum adipisci ab iure,
					accusantium laborum commodi quia atque, vel sit accusamus minima! Natus ad, voluptatum eligendi expedita assumenda itaque.
					Iusto beatae a voluptas veritatis nemo aliquam ea doloremque soluta, ducimus alias nobis magnam adipisci reprehenderit
					autem.
				</p>
			</div>
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dicta a odio itaque repellat aut, incidunt sed eius sunt ducimus
					dolore deserunt, ut veniam voluptatum accusamus temporibus ab quo ad quis possimus, libero ratione quisquam!
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tempore libero voluptates quidem magni officia sunt, molestiae
					architecto sequi minus excepturi fugiat cupiditate aliquid dignissimos assumenda tempora et fuga quasi est. Molestiae
					adipisci, consequuntur pariatur voluptatibus odio ipsum dolores. Quidem corrupti sapiente aspernatur vero. Ad ipsum
					deleniti, et, cum, dolorum delectus dolore culpa fuga, ullam voluptatum quidem eum voluptate. Illum nihil quasi minus
					inventore ipsa beatae maiores officiis excepturi voluptatibus.
				</p>
			</div>
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt animi alias id neque quisquam, laborum saepe laboriosam
					aperiam unde tempore nam repudiandae libero iste, impedit, explicabo omnis. Unde dolore eaque maxime maiores sed, earum
					fuga delectus nobis commodi esse, nostrum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam placeat excepturi iste illum provident praesentium mollitia
					rerum voluptas, impedit, velit nam! Aspernatur velit, fugiat eius autem cum quis id eaque, recusandae nostrum sapiente
					laboriosam accusamus, dolorum, provident maiores rem excepturi? Quas commodi voluptas quo voluptatibus, maxime inventore
					veritatis placeat, sit optio, omnis nam dolor sunt!
				</p>
			</div>
		</section>

		<section id="stories-2">
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium,
					impedit doloribus in laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in laudantium consequatur numquam
					porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit.
					Quasi accusantium, impedit doloribus in laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in
					laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
					error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in laudantium consequatur numquam porro laboriosam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium,
					impedit doloribus in laudantium consequatur numquam porro laboriosam.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vitae consectetur, similique unde voluptatum adipisci ab iure,
					accusantium laborum commodi quia atque, vel sit accusamus minima! Natus ad, voluptatum eligendi expedita assumenda itaque.
					Iusto beatae a voluptas veritatis nemo aliquam ea doloremque soluta, ducimus alias nobis magnam adipisci reprehenderit
					autem.
				</p>
			</div>
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dicta a odio itaque repellat aut, incidunt sed eius sunt ducimus
					dolore deserunt, ut veniam voluptatum accusamus temporibus ab quo ad quis possimus, libero ratione quisquam!
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tempore libero voluptates quidem magni officia sunt, molestiae
					architecto sequi minus excepturi fugiat cupiditate aliquid dignissimos assumenda tempora et fuga quasi est. Molestiae
					adipisci, consequuntur pariatur voluptatibus odio ipsum dolores. Quidem corrupti sapiente aspernatur vero. Ad ipsum
					deleniti, et, cum, dolorum delectus dolore culpa fuga, ullam voluptatum quidem eum voluptate. Illum nihil quasi minus
					inventore ipsa beatae maiores officiis excepturi voluptatibus.
				</p>
			</div>
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt animi alias id neque quisquam, laborum saepe laboriosam
					aperiam unde tempore nam repudiandae libero iste, impedit, explicabo omnis. Unde dolore eaque maxime maiores sed, earum
					fuga delectus nobis commodi esse, nostrum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam placeat excepturi iste illum provident praesentium mollitia
					rerum voluptas, impedit, velit nam! Aspernatur velit, fugiat eius autem cum quis id eaque, recusandae nostrum sapiente
					laboriosam accusamus, dolorum, provident maiores rem excepturi? Quas commodi voluptas quo voluptatibus, maxime inventore
					veritatis placeat, sit optio, omnis nam dolor sunt!
				</p>
			</div>
		</section>
	</section>
	<footer>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate?
		</p>
	</footer>
</body>
</html> 
```


### The jQuery CDN Install

```
<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
	 crossorigin="anonymous"></script>
```

### The jQuery Plugin
```
<script>
	(function ($) {
		'use strict';

		$.fn.equalizeHeight = function () {
			var tallestHeight = 0,
				$stories = this;

			$stories.each(function (i, el) {
				var elHeight = $(el).outerHeight();

				if (elHeight > tallestHeight) {
					tallestHeight = elHeight;
				}
			});

			$stories.css('min-height', tallestHeight);

			return $stories;
		}
	}(jQuery));

	$(document).ready(function () {

		$('#stories-1') // select wrapping element by ID
			.find('.story') // select element to height adjust
			.equalizeHeight() // sets tallest min-height to element
			.css('background', 'red'); // enter css styles here

		$('#stories-2')
			.find('.story')
			.equalizeHeight()
			.css('background', 'green');
	});
</script>
```

### Full Code Example
```
<!doctype html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="initial-scale=1.0">
	<title>Height Adjust</title>
</head>
<body>
	<header>
		<h1>
			Lorem ipsum dolor.
		</h1>
	</header>
	<section>
		<section>
			<p>
				Lorem ipsum dolor sit amet, consectetur adipisicing elit. Itaque quia numquam iure impedit modi dolores ex. Facere molestias,
				eum perferendis.
			</p>
		</section>
		<section id="stories-1">
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium,
					impedit doloribus in laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in laudantium consequatur numquam
					porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit.
					Quasi accusantium, impedit doloribus in laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in
					laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
					error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in laudantium consequatur numquam porro laboriosam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium,
					impedit doloribus in laudantium consequatur numquam porro laboriosam.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vitae consectetur, similique unde voluptatum adipisci ab iure,
					accusantium laborum commodi quia atque, vel sit accusamus minima! Natus ad, voluptatum eligendi expedita assumenda itaque.
					Iusto beatae a voluptas veritatis nemo aliquam ea doloremque soluta, ducimus alias nobis magnam adipisci reprehenderit
					autem.
				</p>
			</div>
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dicta a odio itaque repellat aut, incidunt sed eius sunt ducimus
					dolore deserunt, ut veniam voluptatum accusamus temporibus ab quo ad quis possimus, libero ratione quisquam!
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tempore libero voluptates quidem magni officia sunt, molestiae
					architecto sequi minus excepturi fugiat cupiditate aliquid dignissimos assumenda tempora et fuga quasi est. Molestiae
					adipisci, consequuntur pariatur voluptatibus odio ipsum dolores. Quidem corrupti sapiente aspernatur vero. Ad ipsum
					deleniti, et, cum, dolorum delectus dolore culpa fuga, ullam voluptatum quidem eum voluptate. Illum nihil quasi minus
					inventore ipsa beatae maiores officiis excepturi voluptatibus.
				</p>
			</div>
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt animi alias id neque quisquam, laborum saepe laboriosam
					aperiam unde tempore nam repudiandae libero iste, impedit, explicabo omnis. Unde dolore eaque maxime maiores sed, earum
					fuga delectus nobis commodi esse, nostrum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam placeat excepturi iste illum provident praesentium mollitia
					rerum voluptas, impedit, velit nam! Aspernatur velit, fugiat eius autem cum quis id eaque, recusandae nostrum sapiente
					laboriosam accusamus, dolorum, provident maiores rem excepturi? Quas commodi voluptas quo voluptatibus, maxime inventore
					veritatis placeat, sit optio, omnis nam dolor sunt!
				</p>
			</div>
		</section>

		<section id="stories-2">
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium,
					impedit doloribus in laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing
					elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in laudantium consequatur numquam
					porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit.
					Quasi accusantium, impedit doloribus in laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet,
					consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in
					laudantium consequatur numquam porro laboriosam. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus
					error ipsum ut odio, earum impedit. Quasi accusantium, impedit doloribus in laudantium consequatur numquam porro laboriosam.
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Doloribus error ipsum ut odio, earum impedit. Quasi accusantium,
					impedit doloribus in laudantium consequatur numquam porro laboriosam.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quod vitae consectetur, similique unde voluptatum adipisci ab iure,
					accusantium laborum commodi quia atque, vel sit accusamus minima! Natus ad, voluptatum eligendi expedita assumenda itaque.
					Iusto beatae a voluptas veritatis nemo aliquam ea doloremque soluta, ducimus alias nobis magnam adipisci reprehenderit
					autem.
				</p>
			</div>
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quae dicta a odio itaque repellat aut, incidunt sed eius sunt ducimus
					dolore deserunt, ut veniam voluptatum accusamus temporibus ab quo ad quis possimus, libero ratione quisquam!
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Qui tempore libero voluptates quidem magni officia sunt, molestiae
					architecto sequi minus excepturi fugiat cupiditate aliquid dignissimos assumenda tempora et fuga quasi est. Molestiae
					adipisci, consequuntur pariatur voluptatibus odio ipsum dolores. Quidem corrupti sapiente aspernatur vero. Ad ipsum
					deleniti, et, cum, dolorum delectus dolore culpa fuga, ullam voluptatum quidem eum voluptate. Illum nihil quasi minus
					inventore ipsa beatae maiores officiis excepturi voluptatibus.
				</p>
			</div>
			<div class="story">
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Incidunt animi alias id neque quisquam, laborum saepe laboriosam
					aperiam unde tempore nam repudiandae libero iste, impedit, explicabo omnis. Unde dolore eaque maxime maiores sed, earum
					fuga delectus nobis commodi esse, nostrum.
				</p>
				<p>
					Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsam placeat excepturi iste illum provident praesentium mollitia
					rerum voluptas, impedit, velit nam! Aspernatur velit, fugiat eius autem cum quis id eaque, recusandae nostrum sapiente
					laboriosam accusamus, dolorum, provident maiores rem excepturi? Quas commodi voluptas quo voluptatibus, maxime inventore
					veritatis placeat, sit optio, omnis nam dolor sunt!
				</p>
			</div>
		</section>
	</section>
	<footer>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipisicing elit. Autem, voluptate?
		</p>
	</footer>
	<script src="https://code.jquery.com/jquery-3.2.1.min.js" integrity="sha256-hwg4gsxgFZhOsEEamdOYGBf13FyQuiTwlAQgxVSNgt4="
	 crossorigin="anonymous"></script>
	<script>
		(function ($) {
			'use strict';

			$.fn.equalizeHeight = function () {
				var tallestHeight = 0,
					$stories = this;

				$stories.each(function (i, el) {
					var elHeight = $(el).outerHeight();

					if (elHeight > tallestHeight) {
						tallestHeight = elHeight;
					}
				});

				$stories.css('min-height', tallestHeight);

				return $stories;
			}
		}(jQuery));

		$(document).ready(function () {

			$('#stories-1') // select wrapping element by ID
				.find('.story') // select element to height adjust
				.equalizeHeight() // sets tallest min-height to element
				.css('background', 'red'); // enter css styles here

			$('#stories-2')
				.find('.story')
				.equalizeHeight()
				.css('background', 'green');
		});
	</script>
</body>
</html>
```

