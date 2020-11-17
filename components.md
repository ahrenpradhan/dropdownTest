<h1>Will use 2 components</h1>
<ol>
    <li><u>ITEMS - </u>responsible for a single item- may generate further dropdowns or terminate at that point itself
    </li>
    <li><u>CUSTOMDROPDOWNS - </u>responsible for the dropdown using the Item component to create any listitem</li>
</ol>
<p>will use the concept of recursion by using Items and CustomDropdown</p>
<p>[
        'some action',
        'some other action',
        [
            'hover me for more action',
            'Second Level',
            ['Even More', '3th level', ['another level', '4th level', '4th level', '4th level'], '3th level'],
            'Second Level',
            'Second Level',
        ],
    ]
The entire array is the dropdown list and the first label of a sub array is the title for that specific sub menu</p>
